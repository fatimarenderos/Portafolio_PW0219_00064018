function sumaArreglo(arreglo){
var suma= 0;
var prom=0;
    for(var i=0; i<arreglo.length;i++){
       suma=suma+arreglo[i]; 

    }
    prom=suma/arreglo.length;
    console.log(suma);
    console.log(prom);
    
    
}
sumaArreglo([5,3,1]);