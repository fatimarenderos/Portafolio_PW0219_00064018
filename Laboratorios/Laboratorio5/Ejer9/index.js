function circulo(radio){
var area=0;
area=Math.PI*(radio*radio);

if(radio<0 || radio==0){
    console.log(-1);
}
else{
    console.log(area);
}
}
circulo(0)