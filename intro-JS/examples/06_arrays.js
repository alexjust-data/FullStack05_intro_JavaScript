// ARRAYS
// ------       0         1         2
let fruits = ["apple", "banana", "kiwi"];

// si mezclas tipos de variables te peude cusas problemas
// por ejemplo si le pasas funciones de transformacion
const fruits2 = ["apple", 25, "kiwi"];

console.log(fruits);
console.log(typeof fruits);

// vaciando el array
fruits = [];
console.log(fruits);
// rellenando array
fruits = ["apple", "banana", "kiwi"];


// cómo accedemos a los valores del array?
console.log(fruits[0]); //-> accedemos a "apple"


// accediendo al últimio elemento
console.log(fruits[-1]); //-> undefined
console.log(fruits.at([-1])); //-> usando función at()


// cambiando el elmento en una determinada posición
fruits[1] = "orange";


// añadiendo informacion al array
fruits.push("waterlemon");
console.log(fruits);


// BORRANDO el último elemento
fruits.pop()
console.log(fruits);


// añadir un elemento delante
fruits.unshift("mango")
// añadir varios elementos delante
fruits.unshift("mango", "pinapple")
console.log(fruits);


// INCLUYE?? busca el elemento entero
console.log(fruits.includes("mango")); // --> true
console.log(fruits.includes("ma-n-go")); // --> false


// cantidad de elmeentos qu etiene mi array
console.log(fruits.length);


// CUIDADO push, pop, shift
console.log(fruits);
console.log(fruits.push("mango"));  // esto me devuelve la posición 7 donde puese el push
console.log(fruits[6]); // devuelve lo mismo


//const newArray = fruits.push("mango"); // esto NO crea un nuevo array con un nuevo elemento
const newArray = fruits.concat("banana");// esto SI crea un nuevo array con un nuevo elemento


// DEVUELVE INDICE del elemento
const indexKiwi = fruits.indexOf("kiwi");
console.log(indexKiwi);


// ELIMNADO
console.log(fruits);        // ['mango', 'pinapple', 'mango', 'apple', 'orange', 'kiwi', 'mango']
fruits.splice(indexKiwi, 1) // 5  --> elimina sólo 1 elemnto
fruits.splice(indexKiwi   ) // 5  --> elimina a partir de 'kiwi', 'mango'

console.log(fruits);        // ['mango', 'pinapple', 'mango', 'apple', 'orange',         'mango']







// Paso 1: Crea un array vacío llamado "numeros"
let numeros = [];

// Paso 2: Agrega los números del 1 al 5. Pon entre el número 3 y 4 la palabra keepcoding
numeros = [1, 2, 3, "keepcoding", 4, 5]

// Paso 3: Imprime el contenido del array "numeros" en la consola
console.log(numeros);

// Paso 4: detecta con código si dentro del array está la palabra keepcoding. 
// Si está imprime el mensaje este array no solo tiene números

if (numeros.includes("keepcoding")) { console.log("este array no solo tiene números"); } // -> lo mismo
numeros.includes("keepcoding") && console.log("este array no solo tiene números"); // -> lo mismo

// Paso 5: Agrega el número 10 al inicio del array "numeros"
numeros.unshift(10);

// Paso 6: Imprime el contenido del array "numeros" en la consola
console.log(numeros);

// Paso 7: Utiliza el método indexOf para encontrar el índice de la palabra keepcoding
indexKeep = numeros.indexOf("keepcoding");
console.log(indexKeep);

// Paso 8: Elimina la palabra keepcoding a partir del índice anterior
numeros.splice(indexKeep, 1)

// Paso 9: Imprime el contenido del array "numeros" en la consola
console.log(numeros);

// Paso 10: Imprime la longitud del array "numeros" en la consola
console.log(numeros.length);



/////
// Paso 1: Crea un array vacío llamado "numeros"
const numeros2 = [];

// Paso 2: Agrega los números del 1 al 5. 
// Pon entre el número 3 y 4 la palabra keepcoding
for (let j = 1; j <= 5; j++) {
    if (j !== 3) { 
        numeros2.push(j);
    } else {
            numeros2.push(j);
            numeros2.push("keepcoding");
    }
}
console.log(numeros2);

