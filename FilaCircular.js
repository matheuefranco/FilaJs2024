class FilaCircular{
    constructor(tamanho){
        this.inicio=0;
        this.fim= -1;
        this.qtd=0;
        this.elementos= new Array(tamanho);
    }// fim construtor
//-------------------------------   
   isFull(){
        return this.qtd === this.elementos.length;
}
//-------------------------------
    enqueue(elemento){
        if(!this.isFull()){
            if(this.fim === this.elementos.length-1)
                this.fim=0;
            else
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
        if(this.inicio === this.elementos.length-1)
            this.inicio=0;
        else
            this.inicio++;
        this.qtd--;
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
        let i = this.inicio;
        for(let cont=0;cont<this.qtd;cont++){
            elementosFila+=this.elementos[i]+" |";
            if(i===this.elementos.length-1)
                i=0;
            else
                i++;
        }    
        return elementosFila;
    }
}