// 根据位置返回字符

// 1. charAt(index) 根据位置返回字符
var str = 'andy';
console.log(str.charAt(3));
// 遍历所有的字符
for (var i = 0; i < str.length; i++) {
    console.log(str.charAt(i));
}

// 2. charCodeAt(index)  返回相应索引号的字符ASCII值 目的： 判断用户按下了那个键 
console.log(str.charCodeAt(0)); // 97

// 3. str[index] H5 新增的
console.log(str[0]); // a