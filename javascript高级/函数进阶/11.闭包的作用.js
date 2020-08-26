// 闭包（closure）指有权访问另一个函数作用域中变量的函数。
// 一个作用域可以访问另外一个函数的局部变量 
// 我们fn 外面的作用域可以访问fn 内部的局部变量
// 闭包的主要作用: 延伸了变量的作用范围
function fn() {
    var num = 10;

    // function fun() {
    //     console.log(num);

    // }
    // return fun;
    return function() {
        console.log(num);
    }
}
var f = fn();
f();


// 类似于
// var f = function() {
//         console.log(num);
//     }
// var f =  function fun() {
//         console.log(num);

//     }
