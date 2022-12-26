let arr = [1,2,3,4,5];

console.log(...arr,);  //1 2 3 4 5
console.log(1,2,3);  //1 2 3 
console.log('a','b','c'); //a b c

//11111111111111

let arr1 = [1,2,3,4,5,6];
let arr2 = [2,3,4,5,6,7];
let arr3 =[...arr1,...arr2];

console.log(arr3);  //结果相同[ 1, 2, 3, 4, 5,6, 2, 3, 4, 5,6, 7]

console.log(...arr1,...arr2); //1 2 3 4 5 6 2 3 4 5 6 7
//2222222222222222
arr1.push(...arr2)

console.log(arr1);  //结果相同 [ 1, 2, 3, 4, 5,6, 2, 3, 4, 5,6, 7]
