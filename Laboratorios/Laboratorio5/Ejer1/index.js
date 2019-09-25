function tipoDato(arreglo){
    var arrTipo= [];
    for(var i=0; i<arreglo.length;i++){
        arrTipo.push(typeof arreglo[i]);

    }
    console.log(arrTipo);
  
}
tipoDato([1, "hola", 5])