// fis.config.set('settings.optimizer.png-compressor.type', 'pngquant');
// 然后fis release -op
// 让csssprite之后还能压缩图片
// pngquant能把24位图压缩为8位，ie下无需滤镜，效果非常好


// 插件 hello world 例程
// fis.config.set('modules.preprocessor.js', function(content, file){
//     return content += 'hello world';
// });

// fis.config.set('modules.parser.js', [
//   function(content, file) {
//     return content += 'hello world';
//   },
//   function(content, file) {
//     return content += 'hello world';
//   }
// ]);