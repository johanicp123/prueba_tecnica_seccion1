/* inicialmente tenemos n=9 y ar =[10, 20, 20, 10, 10, 30, 50, 10, 20] , para encontrar los pares, ordenaria la matriz
primero y quedaria [10, 10, 10, 10, 20, 20, 20, 30, 50] ahora se podra contar y ver que hay 3 pares como en la imagen
de la explicacion, ahora con javascript empezare a escribir el codigo de mi logica  */

calcetin(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]); 

// creo la Función calcetin que devolverá el número de pares en el arreglo y tambien defino los parámetros
function calcetin(n, ar) {  
  
  // ordeno la matriz para que me ayude a verificar los pares
  const ordenarAr = ar.sort(); 

  // guarda la posición actual de cada elemento en la matriz
  let actualPosicion = 0; 

  // guarda la siguiente posición de cada elemento en la matriz
  let siguientePosicion = 0; 

  //  este contador se incrementará en 1 en cada par
  let contador = 0; 

  // creo el for para que recorra todas las posiciones del arreglo
  for (let i = 0; i < n - 1; i++) {

    //  me mantiene la posición actual
    actualPosicion = ordenarAr[i]; 

    // me mantiene la siguiente posición
    siguientePosicion = ordenarAr[i + 1]; 

    // si la condicion de actualposicion y la de siguientesPosicion son las mismas, entonces esto es un par de "calcetines"
    if (actualPosicion === siguientePosicion) {

      // incremento el contador porque es un par
        contador++; 

        // incremento el contador que maneja las posiciones en la matriz
        i++; 
        
        // verifico a través de un console de que el contador par de calcetines esta funcionando correctamente.
        console.log(contador); 
    }
  }

  return contador;

  
}

//este es el codigo que me permite contar los pares de calcetines y obtenemos los 3 de la salida de muestra.
