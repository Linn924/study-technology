// some 查找数组中是否有满足条件的元素 
// var arr = [10, 30, 4];
// var flag = arr.some(function(value) {
//     // return value >= 20;
//     return value < 3;
// });
// console.log(flag);


var arr1 = ['red', 'pink', 'blue'];
var flag1 = arr1.some(function(value) {
    return value == 'pink';
});
console.log(flag1);
// filter 也是查找满足条件的元素 返回的是一个数组 而且是把所有满足条件的元素返回回来
// some 也是查找满足条件的元素是否存在  返回的是一个布尔值 如果查找到第一个满足条件的元素就终止循环
