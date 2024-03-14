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
    }


}