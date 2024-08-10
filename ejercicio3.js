// Suma de números únicos: Dado un arreglo de enteros,
// encuentra la suma de todos los números únicos en el
// arreglo (números que aparecen exactamente una vez).

// Solución 1
function sumaDeNumerosUnicos(array) {
  let frecuencia = {}

  for(let num of array) {
    if (frecuencia[num]) {
      frecuencia[num]++;
    } else {
      frecuencia[num] = 1;
    }
  }

  let suma = 0;
  for(let num in frecuencia) {
    if (frecuencia[num] === 1) {
      suma += parseInt(num);
    }
  }

  return suma;
}

const arreglo = [1, 2, 2, 3, 4, 4, 5];

console.log(sumaDeNumerosUnicos(arreglo));
