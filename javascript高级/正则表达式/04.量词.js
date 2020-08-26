// 量词符: 用来设定某个模式出现的次数
// var reg = /^a$/;
// console.log(reg.test('a'));// true
// console.log(reg.test('aa'));// false


// 1. * 相当于 >= 0 可以出现0次或者很多次 
// var reg = /^a*$/;
// console.log(reg.test('')); // true
// console.log(reg.test('a')); // true
// console.log(reg.test('aa')); // true
// console.log(reg.test('aaaaaa')); // true


// 2. + 相当于 >= 1 可以出现1次或者很多次
// var reg = /^a+$/;
// console.log(reg.test(''));
// console.log(reg.test('a'));
// console.log(reg.test('aa'));
// console.log(reg.test('aaaaaa'));


// 3. ?  相当于 1 || 0
// var reg = /^a?$/;
// console.log(reg.test(''));
// console.log(reg.test('a'));
// console.log(reg.test('aa'));
// console.log(reg.test('aaaaaa'));


// 4. {3} 就是重复3次
// var reg = /^a{3}$/;
// console.log(reg.test(''));
// console.log(reg.test('a'));
// console.log(reg.test('aa'));
// console.log(reg.test('aaaaaa'));
// console.log(reg.test('aaa'));


// 5. {3,}  大于等于3
// var reg = /^a{3,}$/;
// console.log(reg.test(''));
// console.log(reg.test('a'));
// console.log(reg.test('aa'));
// console.log(reg.test('aaaaaa'));
// console.log(reg.test('aaa'));


// 6. {3,16}  大于等于3 并且 小于等于16
// var reg = /^a{3,16}$/;
// console.log(reg.test(''));
// console.log(reg.test('a'));
// console.log(reg.test('aa'));
// console.log(reg.test('aaaaaa'));
// console.log(reg.test('aaa'));
// console.log(reg.test('aaaaaaaaaaaaaaaaaaaaa'));