// arguments 的使用  只有函数才有 arguments对象  而且是每个函数都内置好了这个arguments
function fn() {
    // console.log(arguments); // 里面存储了所有传递过来的实参  arguments = [1,2,3]
    // console.log(arguments.length);
    // console.log(arguments[2]);
    // 我们可以按照数组的方式遍历arguments
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);

    }
}
fn(1, 2, 3);
fn(1, 2, 3, 4, 5);
// 伪数组 并不是真正意义上的数组
// 1. 具有数组的 length 属性
// 2. 按照索引的方式进行存储的
// 3. 它没有真正数组的一些方法 pop()  push() 等等