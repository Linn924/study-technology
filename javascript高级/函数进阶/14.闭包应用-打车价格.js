// 闭包应用-计算打车价格 
// 打车起步价13(3公里内),  之后每多一公里增加 5块钱.  用户输入公里数就可以计算打车价格
// 如果有拥堵情况,总价格多收取10块钱拥堵费
// function fn() {};
// fn();
var car = (function() {
    var start = 13; // 起步价  局部变量
    var total = 0; // 总价  局部变量
    return {
        // 正常的总价
        price: function(n) {
            if (n <= 3) {
                total = start;
            } else {
                total = start + (n - 3) * 5
            }
            return total;
        },
        // 拥堵之后的费用
        yd: function(flag) {
            return flag ? total + 10 : total;
        }
    }
})();
console.log(car.price(5)); // 23
console.log(car.yd(true)); // 33

console.log(car.price(1)); // 13
console.log(car.yd(false)); // 13
