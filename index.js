let minhaFila = new FilaCircular(5);

function addFila(){
    const txtElemento = document.getElementById("txtnovoElemento");
    if( minhaFila.enqueue(txtElemento.value)===true){
        alert("Inserido com sucesso");
        console.log(minhaFila.toString());
        mostrarFila();
        txtElemento.value="";
        txtElemento.focus();
    }
    else
        alert("Vagas esgotadas");
}
//----------------------------------------
function removerFila(){
    if(!minhaFila.isEmpty()){
        let removido = minhaFila.dequeue();
        alert("Elemento removido:"+removido);
        mostrarFila();
        console.log(minhaFila.toString());
    }// fim if nao vazia
    else
        alert("Fila Vazia!");
}
//------------------------------------
function mostrarFila(){
    const listaFila = document.getElementById("listFila");
    listaFila.textContent = minhaFila.toString();
}