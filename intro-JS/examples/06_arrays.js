
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


fruits = ["apple", "banana", "kiwi"];


// cómo accedemos a los valores del array?
console.log(fruits[0]); //-> accedemos a "apple"

// accediendo al últimio elemento
console.log(fruits[-1]); //-> undefined
console.log(fruits.at([-1])); //-> usando función at()


// añadiendo informacion al array
fruits.push("waterlemon");
console.log(fruits);












