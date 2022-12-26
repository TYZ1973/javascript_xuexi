let arr = [1,5,6,78,77,10,25,100];
let index = arr.findIndex((value,index)=>value>99);
let target = arr.find(item =>item>99);
console.log(target);
console.log(index);

