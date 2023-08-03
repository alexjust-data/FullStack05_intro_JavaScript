

/**
 * Ejercicio 2 Arreglar bug
 */



// solucion en codigo propuesta por cliente
const calcularPromedio = (numeros) => {
    let sumaTotal = 0;
    for (let i = 0; i < numeros.length; i++) {
    sumaTotal += numeros[i];
    }
    const promedio = sumaTotal / numeros.length;
    return promedio;
};

const listaNumeros = [1, 2, 3, 4, 5];
const promedioNumeros = calcularPromedio(listaNumeros);
console.log(promedioNumeros);



// const calcularPromedio2 = (numeros) => {

//     // Calculamos la suma con reduce
//     const sumaTotal = numeros.reduce((suma, numero) => suma + numero, 0);
//     return sumaTotal / numeros.length;
//   };
  
// const listaNumeros2 = [1, 2, 3, 4, 5];
// const promedioNumeros2 = calcularPromedio2(listaNumeros2);
// console.log(promedioNumeros2);

  