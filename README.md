# fis与seajs生态系统深层结合demo
### 基础搭建
1. 命令行进入`src`目录
2. `npm install -g spm` 安装spm
3. `spm install`  根据 `package.json` 中 `spm.alias` 安装依赖，参考网址：[spm](http://docs.spmjs.org)，[aralejs](http://aralejs.org)


### 我的需求清单 === 还没解决的问题
1. 如果我要用 `seajs` 生态系统（包含[`aralejs`](http://aralejs.org/)，[`aliceui`](http://aliceui.org/)），那么我怎么处理资源的合并，打包呢？  
	`补充说明`： 这里有大坑，fis有个 [`spmx`](https://github.com/fouber/spmx) 的例子
	1. 其中 `seajs` 被放在了 `lib` 目录下，其实应该被 `spm install seajs` 来安装，那就意味着它的所在路径应该是 `sea-modules/seajs/seajs/2.0.0/sea.js` 这样的路径。同理，`sea-modules` 中那个 `main.coffee` 也不应该放在 `sea-modules` 这个目录里。
	2. 如果按照 `spmx` 的设置来 `spm install xxx` 将 `aralejs` 的组件安装到 `sea-modules` 目录下的话，比如执行了 `spm install arale/switchable` ，随便 点开一个模块 `arale/switchable/1.0.0/slide-debug.js` 来观察一下，会发现模块是由几个 `define` 组成的，其中会发现这样的代码，：
	
	```
	define("arale/switchable/1.0.0/switchable-debug", [ "$-debug", "arale/widget/1.1.1/widget-debug", "arale/base/1.1.1/base-debug", "arale/class/1.1.0/class-debug", "arale/events/1.1.0/events-debug", "./plugins/effects-debug", "arale/easing/1.0.0/easing-debug", "./plugins/autoplay-debug", "./plugins/circular-debug" ], function(require, exports, module) {  
    	// Switchable  
    	// -----------  
    	// 可切换组件，核心特征是：有一组可切换的面板（Panel），可通过触点（Trigger）来触发。  
    	// 感谢：  
    	//  - https://github.com/kissyteam/kissy/tree/6707ecc4cdfddd59e21698c8eb4a50b65dbe7632/src/switchable  
    	var $ = require("$-debug");  
    	var Widget = require("arale/widget/1.1.1/widget-debug");  
    	var Effects = require("./plugins/effects-debug");  
    	var Autoplay = require("./plugins/autoplay-debug");  
    	var Circular = require("./plugins/circular-debug");  
    	//... 省略其他代码 ...  
	});       
	```
	
	以上代码，中会有 `var Effects = require("./plugins/effects-debug");` 这种代码，利用 `spmx release` 会引起这样的以下 404，貌似是 `seajs` 不会将这个相对 `id` 模块去 `sea-config.js` 里面来查找。
	
	```
	GET http://127.0.0.1:8080/lib/$.js 404 (Not Found) sea.js:315
	GET http://127.0.0.1:8080/sea-modules/arale/switchable/1.0.0/plugins/effects.js 404 (Not Found) sea.js:315
	GET http://127.0.0.1:8080/sea-modules/arale/switchable/1.0.0/plugins/autoplay.js 404 (Not Found) sea.js:315
	GET http://127.0.0.1:8080/sea-modules/arale/switchable/1.0.0/plugins/circular.js 404 (Not Found) sea.js:315
	GET http://127.0.0.1:8080/sea-modules/arale/widget/1.1.1/daparser.js 404 (Not Found) sea.js:315
	GET http://127.0.0.1:8080/sea-modules/arale/widget/1.1.1/auto-render.js 404 (Not Found) sea.js:315
	GET http://127.0.0.1:8080/sea-modules/arale/base/1.1.1/attribute.js 404 (Not Found) sea.js:315
	GET http://127.0.0.1:8080/sea-modules/arale/base/1.1.1/aspect.js 404 (Not Found) sea.js:315
	Uncaught TypeError: object is not a function 
	```
	
2. 如果我在 `company/javascript` 目录下使用了没有用符合 `seajs` 包装规范的的模块，比如这个 [intro.js](https://github.com/usablica/intro.js)，`seajs` 建议人工加 `define` 包装让其可以被`seajs`加载，这种第三方模块在 `fis` 和 `seajs` 结合的场景下应该按照怎样的规范来被加载，合并，使用，才可以比较好的体现出 fis 和 seajs 的结合呢？
3. `modjs` 在这种开发场景下是不是没有出现的必要性？
4. 根据`seajs`的设计思想，模块的开发目录写在 `sea-modules` 目录之外，`sea-modules` 这个目录只能是构建完成的模块才可以存在的地方，也是 `spm install` 安装的目的地，那 `fis` 和 `seajs` 结合，这样自己写的模块的构建问题怎么处理(如 `company/javascript/helloworld.js` )？
5. 假设 `fis-site` 有一个地方用了 `arale/switchable` 的东西，第三方的`intro.js`，自己写的 `company/javascript/helloworld.js` ，那这个 `fis-site(fis官网demo)` 应该变成什么样才是比较合理的，才可以塞进这样的一个目录结构里？
6. 按照 `fis` 的设计思想，前后端完全分离，前端负责模板，js，css，html，`fis release` 的结果可以直接扔进后端的其中一个目录里，后端人员不用做任何的更改，就可以联调，这个时候线上调试这个问题怎么处理? (hotfix的时候经常要线上调试，需要加载没有uglify过的js源码)


## 目录结构简单注释
```
fsea
├── README.md
├── output
└── src
    ├── company   // 公司组件库
    │   ├── components
    │   ├── css
    │   ├── img
    │   ├── javascript
    │   │   └── helloworld.js   // 自己写的模块
    │   ├── tpl
    │   └── widgets
    │       ├── body  // widget 文件夹
    │       │   ├── css   // 文件夹
    │       │   ├── img   // 文件夹
    │       │   ├── index.html
    │       │   └── js    // 文件夹
    │       ├── footer
    │       ├── header
    │       └── nav
    ├── fis-conf.js
    ├── package.json  
    ├── sea-modules // 存放构建好的 seajs 模块和 spm install 的模块
    │   ├── arale
    │   │   ├── autocomplete
    │   │   │   └── 1.2.1
    │   │   │       ├── autocomplete-debug.js
    │   │   │       ├── autocomplete.js
    │   │   │       ├── package.json
    │   │   │       ├── textarea-complete-debug.js
    │   │   │       └── textarea-complete.js
    │   │   ├── base
    │   │   │   ├── 1.1.0
    │   │   │   │   ├── base-debug.js
    │   │   │   │   ├── base.js
    │   │   │   │   └── package.json
    │   │   │   └── 1.1.1
    │   │   │       ├── base-debug.js
    │   │   │       ├── base.js
    │   │   │       └── package.json
    │   │   ├── class
    │   │   │   └── 1.1.0
    │   │   │       ├── class-debug.js
    │   │   │       ├── class.js
    │   │   │       └── package.json
        │   └── jquery
		。。。省略一堆。。。
    │               
    └── sites  // 网站群目录
        └── fis.baidu.com  // 站点目录
            └── index  // 站点某个页面目录

```

### 为什么是这个目录结构简单解释
1. 关于目录结构 `src/sites` 的存在意义  
	`Q`：这个目录的存在意义是什么？  
	`A`：一个公司可能会有很多不同的产品，但是产品与产品之间有可能是有部分 `widget` 是共用的，所以会有 `sites/fis.baidu.com` `sites/docs.baidu.com` `sites/totaldifferent.com`，提高widget复用度，降低代码量和维护量。  
2. 关于 `src/company` 目录的存在意义  
	`Q`：鉴于目前小公司比较难以实现自己的类似 `npm install xxx` 这样的私有云，一份这样子的`company` 库的存在是挺必要的  
	`A`：所以 `src/company` 存放的是公司的前端组件库和wigets库
	


