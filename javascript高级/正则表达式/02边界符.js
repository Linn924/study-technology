// 边界符 ^ $


var rg = /abc/; // 正则表达式里面不需要加引号 不管是数字型还是字符串型
// /abc/ 只要包含有abc这个字符串返回的都是true
console.log(rg.test('abc'));
console.log(rg.test('abcd'));
console.log(rg.test('aabcd'));
console.log('---------------------------');


var reg = /^abc/; //必须以abc开头
console.log(reg.test('abc')); // true
console.log(reg.test('abcd')); // true
console.log(reg.test('aac')); // false
console.log(reg.test('aabcd')); // false
console.log('---------------------------');


var reg1 = /^abc$/; // 精确匹配 要求必须是 abc字符串才符合规范
console.log(reg1.test('abc')); // true
console.log(reg1.test('aac')); // false
console.log(reg1.test('abcd')); // false
console.log(reg1.test('aabcd')); // false
console.log(reg1.test('abcabc')); // false
