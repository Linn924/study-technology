'use strict';
// 变量名必须先声明再使用
// num = 10;
// console.log(num);
var num = 10;
console.log(num);


// 不能随意删除已经声明好的变量
// delete num;


// 严格模式下全局作用域中函数中的 this 是 undefined。
// function fn() {
//     console.log(this); // undefined。
// }
// fn();


// 严格模式下,如果 构造函数不加new调用, this 指向的是undefined 如果给他赋值则 会报错.
// function Star() {
//     this.sex = '男';
// }
// // Star();
// var ldh = new Star();
// console.log(ldh.sex);


// 定时器 this 还是指向 window 
// setTimeout(function() {
//     console.log(this);
// }, 2000);
// a = 1;
// a = 2;


// 严格模式下函数里面的参数不允许有重名
// function fn(a, a) {
//     console.log(a + a);

// };
// fn(1, 2);
function fn() {}
