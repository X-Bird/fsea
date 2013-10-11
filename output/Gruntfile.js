module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    // grunt-contrib-jshint 语法检查工具

    // test grunt-watch
    // options: {
    // dateFormat: function(time) {
    //     grunt.log.writeln('The watch finished in ' + time + 'ms at' + (new Date()).toString());
    //     grunt.log.writeln('Waiting for more changes...');
    //   },
    // },
    // scripts: {
    //   files: '**/*.js',
    //   tasks: 'jshint',
    // },
    // watch: {
    //   options: {
    //     dateFormat: function(time) {
    //       grunt.log.writeln('The watch finished in ' + time + 'ms at' + (new Date()).toString());
    //       grunt.log.writeln('Waiting for more changes...');
    //     },
    //     livereload: true,
    //     event: ['changed', 'added', 'deleted']
    //   },


    //   // 模板编译部分
    //   compileTpl: {
    //     files: ['hy/**/*.handlebars', 'hy/**/*.json', 'hy/**/*.html', 'sites/**/*.handlebars', 'sites/**/*.json', 'sites/**/*.html'],
    //     tasks: ['clean', 'compile-handlebars', 'exec:fisRelease']
    //   },

    //   // less 编译部分
    //   compileLessHy: {
    //     files: ['hy/**/*.less'],
    //     tasks: ['clean', 'less:compileHy', 'exec:fisRelease']
    //   },
    //   compileLessSites: {
    //     files: ['sites/**/*.less'],
    //     tasks: ['clean', 'less:compileSites', 'exec:fisRelease']
    //   },
    //   compileLessSeaModules: {
    //     files: ['sea-modules/**/*.less'],
    //     task: ['clean', 'less:compileSeaModules', 'exec:fisRelease']
    //   },
    //   compileLessTmp: {
    //     files: ['tmp/**/*.less'],
    //     tasks: ['clean', 'less:compileTmp', 'exec:fisRelease']
    //   },


    //   // js build 部分
    //   jsBuildHyJavascript: {
    //     files: ['hy/javascript/**/*.js'],
    //     tasks: ['clean', 'transport:hyJavascript', 'exec:fisRelease']
    //   },
    //   jsBuildHyWidgets: {
    //     files: ['hy/widgets/**/*.js'],
    //     tasks: ['clean', 'transport:hyWidgets', 'exec:fisRelease']
    //   },
    //   jsBuildSites: {
    //     files: ['hy/widgets/**/*.js'],
    //     tasks: ['clean', 'transport:sites', 'transport:sitesConcated', 'exec:fisRelease']
    //   }
      
    // },

    // // test grunt-exec
    // exec: {
    //   // remove_logs: {
    //   //   command: 'rm -f *.log',
    //   //   stdout: false,
    //   //   stderr: false
    //   // },
    //   fisRelease: {
    //     cmd: 'fis release --optimize --domains --pack --dest local'
    //   },
    //   fisReleaseAndPush: {
    //     cmd: 'fis release --optimize --domains --pack --dest local,remote'
    //   },
    //   fisPush: {
    //     cmd: 'fis release --optimize --domains --pack --dest remote'
    //   },
    //   // 部署到远程节点上
    //   fisDeployRemote: {},
    //   // 部署到基哥机子上
    //   fisDeployJiGe: {}
    //   // echo_grunt_version: {
    //   //   cmd: function() {
    //   //     return 'echo ' + this.version;
    //   //   }
    //   // },
    //   // echo_name: {
    //   //   cmd: function(firstName, lastName) {
    //   //     var formattedName = [
    //   //       lastName.toUpperCase(),
    //   //       firstName.toUpperCase()
    //   //     ].join(', ');

    //   //     return 'echo ' + formattedName;
    //   //   }
    //   // }
    // },


    // // test grunt-compile-handlebars
    // 'compile-handlebars': {
    //   // allStatic: {
    //   //   preHTML: 'test/fixtures/pre-dev.html',
    //   //   postHTML: 'test/fixtures/post-dev.html',
    //   //   template: 'tmp/test.handlebars',
    //   //   templateData: 'tmp/data.json',
    //   //   output: 'tmp/allStatic.html'
    //   // },
    //   // dynamicTemplate: {
    //   //   template: '<h1>{{salutation}}{{punctuation}} {{location}}</h1>',
    //   //   templateData: 'test/fixtures/data.json',
    //   //   output: 'tmp/dynamicTemplate.html'
    //   // },
    //   // dynamicTemplateData: {
    //   //   template: 'test/fixtures/template.handlebars',
    //   //   templateData: {
    //   //       "salutation": "Hallo",
    //   //       "punctuation": ",",
    //   //       "location": "Welt"
    //   //   },
    //   //   output: 'tmp/dynamicTemplateData.html'
    //   // },
    //   // dynamicPre: {
    //   //   preHTML: '<header>INLINE HEADER</header>',
    //   //   template: 'test/fixtures/template.handlebars',
    //   //   templateData: 'test/fixtures/data.json',
    //   //   output: 'tmp/dynamicPre.html'
    //   // },
    //   // dynamicPost: {
    //   //   postHTML: '<footer>INLINE HEADER</footer>',
    //   //   template: 'test/fixtures/template.handlebars',
    //   //   templateData: 'test/fixtures/data.json',
    //   //   output: 'tmp/dynamicPost.html'
    //   // },
    //   globbedTemplateAndOutput: {
    //     template: 'hy/**/*.handlebars',
    //     templateData: 'hy/**/*.json',
    //     output: 'hy/**/*.html'
    //   }
    // },



    // LESS 编译模块
    // 在less文件所在目录旁生成同名的css文件
    // trigger timming: 每次保存的时候触发
    less: {
      options: {
        // PATH 
        // Type: String|Array Default: Directory of input file.
        // Specifies directories to scan for @import directives when parsing. Default value is the directory of the source, which is probably what you want.
        paths: ["."],
        // yuicompress: true,
        compress: true,
        syncImport: true
      },
      compileHy: {
        files: [{
          cwd: 'company/',
          expand: true,
          src: '**/*.less',
          filter: 'isFile',
          dest: 'company/',
          ext: '.css'
        }]
      },
      compileSeaModules: {
        files: [{
          cwd: 'sea-modules/',
          expand: true,
          src: '**/*.less',
          filter: 'isFile',
          dest: 'sea-modules/',
          ext: '.css'
        }]
      },
      compileSites: {
        files: [{
          cwd: 'sites/',
          expand: true,
          src: '**/*.less',
          filter: 'isFile',
          dest: 'sites/',
          ext: '.css'
        }]
      }
    },

    transport: {
      options: {
        // paths: ['.', 'sea-modules'],
        alias: '<%= pkg.spm.alias %>'
      },
      companyJavascript: {
        options: {
          idleading: 'company/'
        },
        files: [{
          cwd: 'company',
          src: 'javascript/**/*.js',
          filter: 'isFile',
          dest: 'sea-modules/company'
        }]
      },
      sites: {
        options: {
          idleading: 'company/sites/'
        },
        files: [{
          cwd: 'sites',
          src: '**/*.js',
          filter: 'isFile',
          dest: 'sea-modules/company/sites'
        }]
      },
      sitesConcated: {
        options: {
          idleading: 'company/sites-concated/'
        },
        files: [{
          cwd: 'sites',
          src: '**/*.js',
          filter: 'isFile',
          dest: 'sea-modules/company/sites-concated'
        }]
      }
    },
    // concat-all sites 的 js - 每次保存的时候都运行
    concat: {
      sites: {
        options: {
          include: 'all'
        },
        files: [{
          expand: true,
          cwd: 'sea-modules/company/sites-concated',
          src: ['**/*.js'],
          dest: 'sea-modules/company/sites-concated/',
          ext: '.js'
        }]
      }
    },
    uglify: {
      all: {
        files: [{
          expand: true,
          cwd: 'sea-modules/',
          src: ['company/**/*.js', '!company/**/*-debug.js'],
          dest: 'sea-modules/',
          ext: '.js'
        }]
      }
    },
    clean: {
      spm: ['../output']
    }
  });

  grunt.loadNpmTasks('grunt-cmd-transport');
  grunt.loadNpmTasks('grunt-cmd-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-compile-handlebars');
  grunt.loadNpmTasks('grunt-exec');


  grunt.registerTask('build-all', ['less', 'transport:companyJavascript', 'transport:sites', 'transport:sitesConcated', 'concat:sites', 'uglify:all']);

  // grunt.registerTask('build-all-push', ['clean' ,'less', 'compile-handlebars', 'transport:hyJavascript', 'transport:hyWidgets', 'transport:sites', 'transport:sitesConcated', 'concat:sites', 'uglify:all', 'exec:fisReleaseAndPush']);
  
  // grunt.registerTask('fis-build', ['clean', 'exec:fisRelease']);
  
  // grunt.registerTask('build-less', ['less']);


  // test compile handlebars 
  // grunt.registerTask('build-handlebars', ['compile-handlebars']);

  // test grunt-exec
  // grunt.registerTask('run-cmd', ['exec:list_files']);
  //    grunt.registerTask('default', ['clean']);

};



// module.exports = function(grunt) {

//   grunt.initConfig({

//     grunt.initConfig({
//       concat: {
//         foo: {
//           options: {
//             include: 'all'
//           },
//           files: {
//             'dist/a.css': ['src/a.js', 'src/b.js'],
//           }
//         }
//       }
//     })

// };



// Files

// 大部分的任务目标都是处理文件（watch也算是吧），所以文件的配置是任务目标的核心。
// 共有二种配置files的方式：
// uglify: {
//     build: {
//         //源文件
//         src: 'src/hello-grunt.js',
//         //目标文件
//         dest: 'build/hello-grunt-min.js'
//     }
// }
// 还有一种：
// uglify: {
//    files: {
//         'build/hello-grunt-min.js': ['src/hello-grunt.js']
//    }
// }
// 明河推荐大家使用第二种方式，更为简洁直观。
// files还支持额外的配置属性（需要额外配置属性时只能使用第一种配置方式。）比如下面的代码：
// grunt.initConfig({
//   concat: {
//     bar: {
//       files: [
//         {src: ['src/bb1.js', 'src/bbb1.js'], dest: 'dest/b1/', filter: 'isFile'},
//       ],
//     },
//   },
// });
// filter：过滤器（函数），函数参数为files的src，return true时才会构建该文件。
// filter函数可以自定义：
// grunt.initConfig({
//   clean: {
//     foo: {
//       src: ['tmp/**/*'],
//       filter: function(filepath) {
//         return grunt.file.isDir(filepath);
//       },
//     },
//   },
// });
// grunt.file.isDir()判断filepath是否是目录。
// 文件的简单正则匹配语法

// 文件名（目录路径）的匹配，基本上和ant一样。
// * 匹配除了/外的任意数量的字符，比如foo/*.js
// ? 匹配除了/外的单个字符
// ** 匹配包含/的任意数量的字符，比如foo/**/*.js
// ! 排除指定文件，比如src: ['foo/*.js', '!foo/bar.js']
// {} 可以理解为“or”表达式，比如src: 'foo/{a,b}*.js'
// 用法举例：
// //匹配foo目录下所有th开头的js文件
// {src: 'foo/th*.js', dest: ...}

// //等价于{src: ['foo/a*.js', 'foo/b*.js'], dest: ...}
// {src: 'foo/{a,b}*.js', dest: ...}

// //优先处理bar.js，然后再处理其他文件
// {src: ['foo/bar.js', 'foo/*.js'], dest: ...}

// //排除处理foo/bar.js文件
// src: ['foo/*.js', '!foo/bar.js'], dest: ...}'foo/*.js', '!foo/bar.js'], dest: ...}