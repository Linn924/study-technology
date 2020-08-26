function Star(uname, age) {
    this.uname = uname;
    this.age = age;
}
// 很多情况下,我们需要手动的利用constructor 这个属性指回 原来的构造函数
// Star.prototype.sing = function() {
//     console.log('我会唱歌');
// };
// Star.prototype.movie = function() {
//     console.log('我会演电影');
// }
Star.prototype = {
    // 如果我们修改了原来的原型对象,给原型对象赋值的是一个对象,则必须手动的利用constructor指回原来的构造函数
    constructor: Star,
    sing: function() {
        console.log('我会唱歌');
    },
    movie: function() {
        console.log('我会演电影');
    }
}
var ldh = new Star('刘德华', 18);
var zxy = new Star('张学友', 19);
console.log(Star.prototype);
console.log(ldh.__proto__);
console.log(Star.prototype.constructor);
console.log(ldh.__proto__.constructor);
