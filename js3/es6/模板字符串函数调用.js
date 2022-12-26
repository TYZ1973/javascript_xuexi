const sayHello = function(){
    return 'hello';
};

let greet = `${sayHello()} : 前面的是从函数里调用出来的`;

console.log(greet);

const fn =()=>{

    return '我是箭头函数'
}

let gg=`${fn()} : 前面的是从函数里调用出来的`;
console.log(gg);