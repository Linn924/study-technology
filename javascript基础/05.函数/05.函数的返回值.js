// 1.函数是做某件事或者实现某种功能
// function cook(aru) {
//     console.log(aru);

// }
// cook('大肘子');
// 2. 函数的返回值格式
// function 函数名() {
//     return 需要返回的结果;
// }
// 函数名();
// (1) 我们函数只是实现某种功能，最终的结果需要返回给函数的调用者函数名() 通过return 实现的
// (2) 只要函数遇到return 就把后面的结果 返回给函数的调用者  函数名() = return后面的结果
// 3. 代码验证
function getResult() {
    return 666;
}
getResult(); // getResult()   = 666
console.log(getResult());

// function cook(aru) {
//     return aru;
// }
// console.log(cook('大肘子'));
// 4. 求任意两个数的和
function getSum(num1, num2) {
    return num1 + num2;
}
console.log(getSum(1, 2));