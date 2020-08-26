// 改变函数内this指向  js提供了三种方法  call()  apply()  bind()

// 1. call()
var o = {
    name: 'andy'
}

function fn(a, b) {
    console.log(this);
    console.log(a + b);
};
fn.call(o, 1, 2);
// call 第一个可以调用函数 第二个可以改变函数内的this 指向
// call 的主要作用可以实现继承

function Father(uname, age, sex) {
    this.uname = uname;
    this.age = age;
    this.sex = sex;
}

function Son(uname, age, sex) {
    Father.call(this, uname, age, sex);
}
var son = new Son('刘德华', 18, '男');
console.log(son);
