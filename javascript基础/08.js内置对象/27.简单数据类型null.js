// 简单数据类型 null  返回的是一个空的对象  object 
var timer = null;
console.log(typeof timer);
// 如果有个变量我们以后打算存储为对象，暂时没想好放啥， 这个时候就给 null 
// 1. 简单数据类型 是存放在栈里面 里面直接开辟一个空间存放的是值
// 2. 复杂数据类型 首先在栈里面存放地址 十六进制表示  然后这个地址指向堆里面的数据