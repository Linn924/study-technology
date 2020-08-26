// 1.Math对象随机数方法   random() 返回一个随机的小数  0 =< x < 1
// 2. 这个方法里面不跟参数
// 3. 代码验证 
console.log(Math.random());
// 4. 我们想要得到两个数之间的随机整数 并且 包含这2个整数
// Math.floor(Math.random() * (max - min + 1)) + min;
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandom(1, 10));
// 5. 随机点名  
var arr = ['张三', '张三丰', '张三疯', '李四', '李思思', 'Linn'];
console.log(arr[getRandom(0, arr.length - 1)]);