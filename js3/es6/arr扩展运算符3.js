var arrLike= {
    "0" : "第一",
    "1" : "第二",
    "2" : "第三",
    "3" : "第四",
    "length": 4
}

var arr = Array.from(arrLike);     //伪数组转换成真数组
console.log(arr);       //[ '第一', '第二', '第三', '第四' ]
//---------------------------------

var arrLike1= {
    "0" : 1,
    "1" : 2,
    "2" : 3,
    "3" : 4,
    "length": 4
}
var arr1 = Array.from(arrLike1,(item) => {return item*2}); // item => item*2
console.log(arr1);
