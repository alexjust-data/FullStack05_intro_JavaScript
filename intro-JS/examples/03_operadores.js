
// Operadores de asignacion

let x = 5;
let y = 2;
console.log(x + y)

let suma = x + y;
console.log(suma)

let resta = x - y;
let producto = x * y;
let division = x / y;
let modulo = 4 % 2;

let portal = 10;
let error = 12 - portal;
console.log(error);


// asignacion de adición
x = x + 15;
x += 15;    // x = x + 15;
x++;        // x = x + 1;
console.log(x)


// operadores de comparación
let a = 5;
let b = 8;
console.log(a == b); // false
console.log(a != b); // true
console.log(a <= b); // true
console.log(a >= b); // false


// == vs ==
console.log("== vs ==")
console.log('1' == 1)
// siempre que hagas un comparador utiliza los === triple igual
console.log(true === 1); //false
console.log(0 === ""); //false
// asignamos una variable comparada
let isFalse = 0 ===""; // false
console.log(isFalse)


// operadores lógicos 
// || or
// && and
let w = 5;
let z = 10;
console.log(w > 3 && z < 8); // false

let operadorLogico = w > 3 && z < 8;
console.log(operadorLogico); // false

 
// negacion
const isGreatherThan3 = w > 3; // true
// si no es true : negación de lo que tenemos con !
console.log(!isGreatherThan3); // false

let numero = 333;
let numero22 = 222;

let numero11 = 333; numero2 = 222;


const num1 = 20;
const num2 = 5; 
const valorFinal = 120;

// Usar operador aritméticos
let product = (num1 * num2) === valorFinal;
console.log(product)
