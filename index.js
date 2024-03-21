let minhaFila = new Fila(5);

function addFila(){
    const txtElemento = document.getElementById("txtnovoElemento");
    if( minhaFila.enqueue(txtElemento.value)===true){
        alert("Inserido com sucesso");
        console.log(minhaFila.toString());
    }
    else
        alert("Vagas esgotadas");

}