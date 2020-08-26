// 利用 new Object 创建对象

var obj = new Object(); // 创建了一个空的对象
obj.uname = '张三疯';
obj.age = 18;
obj.sex = '男';
obj.sayHi = function () {
    console.log('hi~');

}

// (1) 我们是利用 等号 = 赋值的方法 添加对象的属性和方法
// (2) 每个属性和方法之间用 分号结束
console.log(obj.uname);
console.log(obj['sex']);
obj.sayHi();