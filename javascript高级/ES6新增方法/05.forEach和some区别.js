var arr = ['red', 'green', 'blue', 'pink'];
// 1. forEach迭代 遍历
// arr.forEach(function(value) {
//     if (value == 'green') {
//         console.log('找到了该元素');
//         return true; // 在forEach 里面 return 不会终止迭代
//     }
//     console.log(11);

// })

// 如果查询数组中唯一的元素, 用some方法更合适,
arr.some(function(value) {
    if (value == 'green') {
        console.log('找到了该元素');
        return true; //  在some 里面 遇到 return true 就是终止遍历 迭代效率更高
    }
    console.log(11);

});

// arr.filter(function(value) {
//     if (value == 'green') {
//         console.log('找到了该元素');
//         return true; //  // filter 里面 return 不会终止迭代
//     }
//     console.log(11);

// });
