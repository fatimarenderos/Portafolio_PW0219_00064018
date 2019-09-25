function llenar(numero){
    var arreglo= Array();
    var acertado = false;
    for(var i=0; i<20; i++){
        arreglo[i]=(Math.floor(Math.random()*100)+1);
        console.log(arreglo[i]);
    }
  for(var j=0; j<arreglo.length;j++){
    if(arreglo[j]==numero){
        console.log("Has acertado");
        acertado  = true;
        break;
        
    }
    // break;

}
if(acertado==false){
    console.log("No has acertado");
    
}

}
llenar(3);