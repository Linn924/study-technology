const s1 = new Set();
console.log(s1.size)

const s2 = new Set(["a", "b"]);
console.log(s2.size)

const s3 = new Set(["a","a","b","b"]);
console.log(s3.size)
const ary = [...s3]; //数组去重
console.log(ary)

const s4 = new Set();
// 向set结构中添加值 使用add方法
s4.add('a').add('b');
console.log(s4.size)

// 从set结构中删除值 用到的方法是delete
const r1 = s4.delete('c');
console.log(s4.size)
console.log(r1); // 没有c这个值 删除失败返回false

// 判断某一个值是否是set数据结构中的成员 使用has
const r2 = s4.has('d');
console.log(r2)

// 清空set数据结构中的值 使用clear方法
s4.clear();
console.log(s4.size);

// 遍历set数据结构 从中取值
const s5 = new Set(['a', 'b', 'c']);
s5.forEach(value => console.log(value))