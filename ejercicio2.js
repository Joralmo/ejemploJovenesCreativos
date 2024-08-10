// Producto máximo de tres números: Dado un arreglo de enteros,
// encuentra el producto máximo posible de tres números distintos del arreglo.

console.log("Ejercicio 2");

// Solución 1
const valores = [2,4,6,8,10]

function maxProd3(valores){ //Se crea la funcion y recibe el arreglo con los valores
    let maxProd = -Infinity; //Variable de maximo producto (a comparar)
    let prod=1;

    for (let i = 0; i < valores.length-2; i++){ //Se recorre desde el inicio hasta el tamaño maximo del arreglo - 2
        prod = 1; //Se reinicia el valor de prod
        for (let j = i; j <= i+2; j++){ //Recorres empezando desde i hasta 2 valores despues (toma 3 valores en total)
            prod = prod*valores[j]; //Se hace la multiplicacion de los 3 valores
        }
        if(prod>maxProd) //Se compara si es mayor a la variable de maxprod(producto maximo)
        {
            maxProd=prod; //Si es mayor se le asigna dicho valor
        }
    }

    return maxProd; //Retorna el maximo producto
}

console.log(`El mayor producto es ${maxProd3(valores)}`); //Se muestra el maximo producto
