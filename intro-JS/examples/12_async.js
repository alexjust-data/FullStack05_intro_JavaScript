

// /**
//  * ASINCRONIA
//  * EL camino lineal se va a bifurcar, en segundo plano y van a ejecutarse
//  * cuando ocurra un evento determinado. Cuando hace click en una web eso va a pasar
//  * si quieres leer un archivo y sacar el texto, esa lectura en JS suele ser asincrono,
//  * es decir el codigo no va a esperarnos irá haciendo.
//  */

// console.log("Hola");
// // esto se ejecuta, pero de forma paralela
// // no es que se cree otro hilo de ejecución
// // si no que queda a la espera, cuando acaba o otro, se jecuta
// setTimeout( () => {
//     console.log("mundo");
// }, 3000);
// console.log("Fin")



// console.log("Hola");

// const cargarDatos = () => {
//     setTimeout( () => {
//         console.log("Datos cargados");
//     }, 2000);
// };

// let loading = true;
// cargarDatos();
// loading = false;

// console.log(loading);

// Hola
// false
// Datos cargados




/**
 * controlar la espera
 * acceder al valor
 */

/*
1. callback -> cb
2. Promesas
3. Async / await
*/


// queremos que la funcióin se ejecute justo cuando termine el timeOut
const cargarDatosCb = (cb) => {
    setTimeout( () => {
        console.log("Datos cargados1");
        cb("Datos cargados2");  // esto es como si digo "const cb = (data) => console.log("Datos cargados");"
    }, 2000);
};

loading = true;
console.log(loading);

cargarDatosCb( (data) => {
    console.log(data);      // este data es lo que manda cb("Datos cargados");
    loading = false;
    console.log(loading);
});
