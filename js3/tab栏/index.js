class Tab{
    constructor(id){
       this.main= document.querySelector(id);
       this.lis = this.main.querySelectorAll('li');
       this.section = this.main.querySelectorAll('section')
    }
init(){
    for(var i = 0 ; i < this.lis.length;i++){
        this.lis[i].index = i;
        this.lis[i].onclick = function () {
            console.log(this.index);
          }
    }
}

    toggleTab(){
        
    }
    addTab(){

    }
    removeTab(){

    }
    editTab(){

    }
}

var tab = new Tab('#tab');