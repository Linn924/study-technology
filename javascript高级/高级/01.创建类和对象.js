// 1. 创建类 class  创建一个 明星类
class Star {
    constructor(uname,age) {
        this.username = uname
        this.age = age
    }
}


// 2. 利用类创建对象 new
var Linn = new Star("Linn",20)
console.log(Linn)


//(1) 通过class 关键字创建类, 类名我们还是习惯性定义首字母大写
//(2) 类里面有个constructor 函数,可以接受传递过来的参数,同时返回实例对象
//(3) constructor 函数 只要 new 生成实例时,就会自动调用这个函数, 如果我们不写这个函数,类也会自动生成这个函数
//(4) 生成实例 new 不能省略
//(5) 最后注意语法规范, 创建类 类名后面不要加小括号,生成实例 类名后面加小括号, 构造函数不需要加function