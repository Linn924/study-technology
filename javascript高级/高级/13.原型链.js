function Star(uname, age) {
    this.uname = uname;
    this.age = age;
}
Star.prototype.sing = function() {
    console.log('我会唱歌');
}
var ldh = new Star('刘德华', 18);
// 只要是对象就有__proto__ 原型, 指向原型对象
console.log(Star.prototype);
console.log(Star.prototype.__proto__ === Object.prototype);
// Star原型对象里面的__proto__原型指向的是 Object.prototype
console.log(Object.prototype.__proto__);
// Object.prototype原型对象里面的__proto__原型  指向为 null
