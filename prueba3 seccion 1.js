/* inicialmente tenemos que nuestro sobrino va a cumplir 4 años y las alturas de las
velas son 3,2,1,3 y la forma en la que medimos cuantas velas se apagaran se
basara en la altura, por lo cual hay 2 velas de altura 3, son las que podria apagar
mi sobrino, ahora con javascript empezare a escribir el codigo de mi logica  */

const arr = [3, 2, 1, 3];

//creo la funcion y llamo como parametro mi matriz arr
function velacumple(arr) {

  /* 
   declaro altura que me devuelve con math.max el mayor numero en mi matriz, 
   mediante el operador de propagacion ... estamos cogiendo nuestro matriz para procesar 
   cada uno de sus elementos como argumentos para hallar el mayor numero que seria 3 
   */
  let altura = Math.max(...arr);

  //declaro que nuestra suma es 0 por ahora
  let suma = 0;

  //creo el ciclo for con su expresion inicial de i, la condicion y expresion final
  for ( let i = 0; i < arr.length ; i++ ) {

    /* 
    la declaracion if lo que quiero hacer es recorrer cada valor del arr, si cumple la
    condicion de == alltura, agragar valor 1 a suma. 
    */
    if (arr[i] == altura) {
      suma += 1;
    }
  }
  //verificando si efectivamente me da las 2 velas de altura 3
  console.log(suma);

  //aqui es donde pondre mi retorno de mi suma
  return suma;

 
}

//aqui se llama la funcion y la ejecutara y obtenemos el valor 2.
velacumple(arr);

