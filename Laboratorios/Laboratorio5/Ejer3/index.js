function ocurrencia(datos){
var contador=0;
    for(var i=0; i<datos[0].length;i++){
       if(datos[0][i]==datos[1]){
           contador ++;
       }

 
     }
     console.log(contador);
     
    }
ocurrencia([[1,5,"palabra",5], 5]);