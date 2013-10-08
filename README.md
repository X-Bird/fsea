# fis与seajs生态系统深层结合demo
### 基础搭建
1. 命令行进入`src`目录
2. `npm install -g spm` 安装spm
3. `spm install`  根据 `package.json` 中 `spm.alias` 安装依赖，参考网址：[spm](http://docs.spmjs.org)，[aralejs](http://aralejs.org)


### 我的需求清单 === 还没解决的问题
1. 如果我要用 `seajs` 生态系统（包含[`aralejs`](http://aralejs.org/)，[`aliceui`](http://aliceui.org/)），那么我怎么处理资源的合并，打包呢？
2. 如果我在 `company/javascript` 目录下使用了没有用符合`seajs`包装规范的的模块，比如这个 [intro.js](https://github.com/usablica/intro.js)，`seajs`建议人工加`define`包装让其可以被`seajs`加载，这种第三方模块在`fis`和`seajs`结合的场景下应该按照怎样的规范来被加载，合并，使用，才可以比较好的体现出 fis 和 seajs 的结合呢？
3. `modjs` 在这种开发场景下是不是没有出现的必要性？
4. 根据`seajs`的设计思想，模块的开发目录写在 `sea-modules` 目录之外，`sea-modules` 这个目录只能是构建完成的模块才可以存在的地方，也是 `spm install` 安装的目的地，那 `fis` 和 `seajs` 结合，这样自己写的模块的构建问题怎么处理(如`company/javascript/helloworld.js`)？
5. 假设 `fis-site` 有一个地方用了 `arale/switchable` 的东西，第三方的`intro.js`，自己写的`company/javascript/helloworld.js`，那这个`fis-site(fis官网demo)`应该变成什么样才是比较合理的，才可以塞进这样的一个目录结构里？
6. 按照 `fis` 的设计思想，前后端完全分离，前端负责模板，js，css，html，`fis release` 的结果可以直接扔进后端的其中一个目录里，后端人员不用做任何的更改，就可以联调，这个时候线上调试这个问题怎么处理(hotfix的时候经常要线上调试，需要加载没有uglify过的js源码)？


## 目录结构简单注释
```
fsea
├── output
├── readme.md
└── src
    ├── company
    ├── fis-conf.js
    ├── package.json
    ├── sea-modules
    │   ├── arale
    │   │   ├── autocomplete
    │   │   │   └── 1.2.1
    │   │   │       ├── autocomplete-debug.js
    │   │   │       ├── autocomplete.js
    │   │   │       ├── package.json
    │   │   │       ├── textarea-complete-debug.js
    │   │   │       └── textarea-complete.js
    	。。。省略一堆。。。
    └── sites

```

### 为什么是这个目录结构简单解释
1. 关于目录结构 `src/sites` 的存在意义  
	`Q`：这个目录的存在意义是什么？  
	`A`：一个公司可能会有很多不同的产品，但是产品与产品之间有可能是有部分`widget`是共用的，所以会有 `sites/fis.baidu.com` `sites/docs.baidu.com` `sites/totaldifferent.com`，提高widget复用度，降低代码量和维护量。  
2. 关于`src/company`目录的存在意义  
	`Q`：鉴于目前小公司比较难以实现自己的类似 `npm install xxx` 这样的私有云，一份这样子的`company` 库的存在是挺必要的
	`A`

### 待解决问题