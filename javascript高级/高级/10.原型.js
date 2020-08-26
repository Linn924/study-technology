// 构造函数的问题. 
function Star(uname, age) {
    this.uname = uname;
    this.age = age;
    // this.sing = function() {
    //     console.log('我会唱歌');

    // }
}
//把相同的方法放在构造函数的原型对象上 节省内存 因为放在构造函数中 每次实例化对象里面的方法的地址不同会浪费内存
Star.prototype.sing = function() {
    console.log('我会唱歌');
}

var ldh = new Star('刘德华', 18);
var zxy = new Star('张学友', 19);
console.log(ldh.sing === zxy.sing);
// console.dir(Star);
ldh.sing();
zxy.sing();

// 一般情况下,我们的公共属性定义到构造函数里面, 公共的方法我们放到原型对象身上
