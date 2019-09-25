function orden(arreglo){
    var mayor=0;
    var menor=0;
    var aux=0;
    for(var i=0;i<arreglo.length; i++){
            mayor=arreglo[i];
    for(var j=0; j<arreglo.length;j++){
            menor=arreglo[j];
        if(mayor<menor){
            aux=mayor;
            mayor=menor;
            menor=mayor;
        }
        else{
            mayor=mayor;
        }
        }
    }

   
}

orden([1,3,4,2]);