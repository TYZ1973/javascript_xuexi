var arr =[
    {id :1,
    username: '一号'},
    {
        id:2,
        username:'二号'
    }
];

let target = arr.find(item =>item.id==2);  // (item) => {return item.id ==2}
// let target = arr.find(item =>item.id==5);  // (item) => {return item.id ==5}  -> undefined
console.log(target);