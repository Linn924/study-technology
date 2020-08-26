// 查找字符串"abcoefoxyozzopp"中所有o出现的位置以及次数
// 核心算法：先查找第一个o出现的位置
// 然后 只要indexOf 返回的结果不是 -1 就继续往后查找
// 因为indexOf 只能查找到第一个，所以后面的查找，一定是当前索引加1，从而继续查找
var str = "oabcoefoxyozzopp";
var index = str.indexOf('o');
var num = 0;
// console.log(index);
while (index !== -1) {
    console.log(index);
    num++;
    index = str.indexOf('o', index + 1);
}
console.log('o出现的次数是: ' + num);