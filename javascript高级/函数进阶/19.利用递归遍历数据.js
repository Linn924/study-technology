var data = [{
    id: 1,
    name: '家电',
    goods: [{
        id: 11,
        gname: '冰箱',
        goods: [{
            id: 111,
            gname: '海尔'
        }, {
            id: 112,
            gname: '美的'
        }, ]
    }, {
        id: 12,
        gname: '洗衣机'
    }]
}, {
    id: 2,
    name: '服饰'
}];
// 输入id号,就可以返回的数据对象
//  利用 forEach 去遍历里面的每一个对象

function getID(obj, id) {
    var o = {}
    obj.forEach(function (item) {
        // console.log(item)
        if (item.id == id) {
            o = item
            return item
            // 想要得里层的数据 11 12 可以利用递归函数
            // 里面应该有goods这个数组并且数组的长度不为 0 
        } else if (item.goods && item.goods.length > 0) {
            o = getID(item.goods, id);
        }
    })
    return o
}

getID(data,1)
getID(data,2)
getID(data,11)



