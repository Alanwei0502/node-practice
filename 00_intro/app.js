var content = require('./data');

var a = 1;

console.log('Hello world');

a = 2;

console.log(global.a); // undefined
// 原因是nodejs的環境希望每個檔案都是一個模組，所以應該可以隨意污染全域global物件

global.a = 1;
console.log(global.a);

console.log(content);
