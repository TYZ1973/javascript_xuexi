//set 数据结构，     类似于数组， 但是成员值都是唯一的   没有重复值
// 如果存储重复数据， set 会检测到数据重复 从而不会去存储

const s = new Set();
const s1 = new Set([1,2,3,4,5,5]);   


console.log(s); //Set(0) {}
console.log(s.size);  //0

console.log(s1);       // Set(5) { 1, 2, 3, 4, 5 } 重复的5 就会不被接受
console.log(s1.size);       //5  原数组长度是6， 但是这里只记录5
//-----------------------------------
const arr1 =['a','v','c','c','d'];
const s2 = new Set(arr1) //可用于数据去重
console.log(s2);    //Set(4) { 'a', 'v', 'c', 'd' } 
console.log(s2.size);    //4
const arr2 = [...s2]; // 将 Set(4) { 'a', 'v', 'c', 'd' } 转换成 数组  [ 'a', 'v', 'c', 'd' ]
console.log(arr2);   // [ 'a', 'v', 'c', 'd' ]  
console.log('---------------------------------------'); 
//----------------------------  
//set()
// add(value)
// delete(value)
// has(value)
// clear()
const s5 = new Set();

var ad = s5.add(1).add(2).add(3).add(4);
console.log(s5);
console.log(ad);

var dele = s5.delete(2);
console.log(s5);
console.log(dele);

var ha = s5.has(3);
console.log(s5);
console.log(ha);

s5.clear();
console.log(s5);
//===================================

//set 的 foreach 方法

var s6 = new Set(['a','b','c','z','y','h']);
s6.forEach(value=>{
    console.log(value);
})
