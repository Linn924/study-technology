//var rg = /abc/;  只要包含abc就可以 
// 字符类: [] 表示有一系列字符可供选择，只要匹配其中一个就可以了


var rg = /[abc]/; // 只要包含有a 或者 包含有b 或者包含有c 都返回为true
console.log(rg.test('andy'));// true
console.log(rg.test('baby'));// true
console.log(rg.test('color'));// true
console.log(rg.test('red'));// false
console.log('------------------');


var rg1 = /^[abc]$/; // 三选一 只有是单个a 或者是单个b  或者是单个c 这三个字母才返回 true
console.log(rg1.test('aa'));// false
console.log(rg1.test('a')); // true
console.log(rg1.test('b')); // true
console.log(rg1.test('c')); // true
console.log(rg1.test('abc')); // false
console.log('------------------');


var reg = /^[a-z]$/; // 26个英文字母任何一个字母返回 true  - 表示的是a 到z 的范围  
console.log(reg.test('a')); // true
console.log(reg.test('z')); // true
console.log(reg.test(1)); // false
console.log(reg.test('A')); // false
console.log('------------------');


// 字符组合
var reg1 = /^[a-zA-Z0-9_-]$/; // 26个英文字母(大写和小写都可以)任何一个字母返回 true  
console.log(reg1.test('a'));
console.log(reg1.test('B'));
console.log(reg1.test(8));
console.log(reg1.test('-'));
console.log(reg1.test('_'));
console.log(reg1.test('!'));
console.log('----------------');


// 如果中括号里面有^ 表示取反的意思 千万和 我们边界符 ^ 别混淆
var reg2 = /^[^a-zA-Z0-9_-]$/;
console.log(reg2.test('a'));
console.log(reg2.test('B'));
console.log(reg2.test(8));
console.log(reg2.test('-'));
console.log(reg2.test('_'));
console.log(reg2.test('!'));
