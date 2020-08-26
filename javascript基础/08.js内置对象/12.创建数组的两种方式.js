// 创建数组的两种方式
// 1. 利用数组字面量
var arr = [1, 2, 3];
console.log(arr[0]);

// 2. 利用new Array()
// var arr1 = new Array();  // 创建了一个空的数组
// var arr1 = new Array(2);  // 这个2 表示 数组的长度为 2  里面有2个空的数组元素 
var arr1 = new Array(2, 3); // 等价于 [2,3]  这样写表示 里面有2个数组元素 是 2和3
console.log(arr1);