const sum = (...args)=>{
    let total = 0;
    args.forEach(item =>{
        total += item;
    })
    return total;
};
console.log(sum(10,20));
console.log(sum(10,20,30));




// function sum1(first,...args){

//     console.log(first);
//     console.log(args);  
// }
// sum1(10,20,30)