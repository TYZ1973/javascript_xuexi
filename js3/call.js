var obj = { 
    name : 'xxx',
    age : 30,
    sha: '没'
}

function fn(a,b,c){
    console.log(this);
    console.log(a+b*c);
};
fn.call(obj,1,2,3)  // call 可以改变this指向， call 可以调用函数
//--------------------------------
//call 可以实现继承

function Father (a,b,c){
    this.a=a;
    this.b=b;
    this.c=c;
   
    
}
function Son(a,b,c){

    Father.call(this,a,b,c)

}
var son = new Son('2dasd',33,44);
var fa = new Father('2dasd',33,44);
console.log(son);
console.log(son.a);
console.log(fa.c);

