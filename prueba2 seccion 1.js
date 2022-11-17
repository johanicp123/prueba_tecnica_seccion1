/* inicialmente en el ejercicio tenemos un arr =[1,2,3,4,5], para calcular el maximo usuando 
cuatro de los cinco numeros enteros seria: suma de todos menos 1, la suma es 
2+3+4+5 = 14, igualmente se hace para calcular el minimo, la suma de todos 
menos 5, la suma es 1+2+3+4=10, ahora con javascript empezare a escribir el codigo de mi logica  */

const arr = [1, 2, 3, 4, 5]

//creo la funcion y llamo como parametro mi matriz arr
function minMaxSum(arr){

   //declaro que nuestra suma es 0 por ahora
   let sum=0; 

   //creo el ciclo for con su expresion inicial de i, la condicion y expresion final
   for (let i=0; i < arr.length;i++) // 
   {
      /* 
      en este punto va sumando los valores de mi matriz hasta cumplir la condicion de for
      el valor de sum que nos va a dar es 15.   
      */
      sum += arr[i]; 
   }
   /* 
   declaro max y lo que hara es que el valor sum que es 15 se le resta el valor del matriz en posicion 0
   que es valor 1, por lo que me dara como resultado 14
   */
   let max = sum - arr[0]; 

    /* 
   declaro min y lo que hara es que el valor sum que es 15 se le resta el valor del matriz de la ultima posicion,
   para hallar se hace el arr.length-1 que es valor 5, por lo que me dara como resultado 10
   */
   let min = sum - arr[arr.length-1]

   //verifico que efectivamente me de el max y min
   console.log(max,min)
}

minMaxSum(arr);

//este es el codigo que me permite hallar el max y min de mi matriz.