// 案例1 ： 结果是几？
function f1() {
    var num = 123;

    function f2() {
        var num = 0;
        console.log(num); // 站在目标出发，一层一层的往外查找
    }
    f2();
}
var num = 456;
f1(); // 0
// 案例2 ：结果是几？
var a = 1;

function fn1() {
    var a = 2;
    var b = '22';
    fn2();

    function fn2() {
        var a = 3;
        fn3();

        function fn3() {
            var a = 4;
            console.log(a); //a的值 ?
            console.log(b); //b的值 ?
        }
    }
}
fn1();// 0 4 '22'