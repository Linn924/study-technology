// 字符串操作方法
// 1. concat('字符串1','字符串2'....)
var str = 'andy';
console.log(str.concat('red'));

// 2. substr('截取的起始位置', '截取几个字符');
var str1 = '改革春风吹满地';
console.log(str1.substr(2, 2)); // 第一个2 是索引号的2 从第几个开始  第二个2 是取几个字符

// 3. 替换字符 replace('被替换的字符', '替换为的字符')  它只会替换第一个字符
var str = 'andyandy';
console.log(str.replace('a', 'b'));
// 有一个字符串 'abcoefoxyozzopp'  要求把里面所有的 o 替换为 *
var str = 'abcoefoxyozzopp'
while (str.indexOf('o') !== -1) {
    str = str.replace('o','*')
}
console.log(str)
// 4. 字符转换为数组 split('分隔符')    前面我们学过 join 把数组转换为字符串
var str2 = 'red, pink, blue';
console.log(str2.split(','));
var str3 = 'red&pink&blue';
console.log(str3.split('&'));