function fibo(numero){

{
  if (numero===1) 
     {
         return [0, 1];
    } 
  else 
  {
    var s = fibo(numero - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
      }
   }
}

 console.log(fibo(4));