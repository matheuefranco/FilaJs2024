class Fila{
    constructor(tamanho){
        this.inicio=0;
        this.fim= -1;
        this.qtd=0;
        this.elementos= new Array(tamanho);
    }// fim construtor
//-------------------------------   
    get isFull(){
        return this.fim == this.elementos.length-1;
    }
//-------------------------------
    enqueue(elemento){
        if(!this.isFull){
            this.fim++;
            this.elementos[this.fim] = elemento;
            this.qtd++;
            console.log("Index of ini e fim:"+this.inicio+" "+this.fim+ " Qtd:"+ this.qtd);
            return true;
        }
        return false;
    }// fim enqueue
//--------------------
    dequeue(){
        let elemento = this.elementos[this.inicio];
        this.inicio++;
        this.qtd;
        console.log("Index of ini e fim:"+this.inicio+" "+this.fim+ " Qtd:"+ this.qtd);
        return elemento;
    }
    //--------------------
    isEmpty(){
        return this.qtd===0;
    }
    //-------------------
    first(){
        return this.elementos[this.inicio];
    }
    //-------------------
    last(){
        return this.elementos[this.fim];
    }
    //--------------------
    toString(){
        let elementosFila = "";
        for(let i=this.inicio;i<this.fim;i++)
            elementosFila+=this.elementos[i]+" |";
        return elementosFila;
    }
    

}