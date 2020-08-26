// 闭包（closure）指有权访问另一个函数作用域中变量的函数。
// 闭包: 我们fun 这个函数作用域 访问了另外一个函数 fn 里面的局部变量 num
function fn() {
    var num = 10;

    function fun() {
        console.log(num);

    }
    fun();
}
fn();
