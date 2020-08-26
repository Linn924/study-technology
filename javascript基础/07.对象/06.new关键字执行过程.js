// new关键字执行过程
// 1. new 构造函数可以在内存中创建了一个空的对象 
// 2. this 就会指向刚才创建的空对象
// 3. 执行构造函数里面的代码 给这个空对象添加属性和方法
// 4. 返回这个对象
function Star(uname, age, sex) {
    this.name = uname;
    this.age = age;
    this.sex = sex;
    this.sing = function (sang) {
        console.log(sang);

    }
}
var Linn = new Star('Linn', 18, '男');