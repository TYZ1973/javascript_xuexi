

var b  = 10;

function Add3(){
    var a = 10;
    
    return function(){
        a++;
        return a;
    };
};
var cc =  Add3();

console.log(cc());

console.log(cc());

console.log(cc());

console.log(b);