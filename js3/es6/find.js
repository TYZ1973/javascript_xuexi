var arr=[1,2,3,66,7,77,88,999,8554,12336]

function fn(currentValue,index){

    //if(currentValue>99){}
     return currentValue >99;
     //return 'index: '+ index +'currentValue:'+currentValue;
}


console.log(arr.find(fn)); //999

// 定义和用法
// find() 方法返回数组中第一个通过测试的元素的值（作为函数提供）。

// find() 方法对数组中存在的每个元素执行一次函数：

// 如果找到函数返回 true 值的数组元素，则 find() 返回该数组元素的值（并且不检查剩余值）
// 否则返回 undefined
// 注释：find() 不对空数组执行该函数。

// 注释：find() 不会改变原始数组。