
// definiendo funcion
function sayHi (){
    const saludo = "Hola";
    console.log(saludo);
}

sayHi();


// definiendo funcion
function mayoeEdad (age) {
    if (age >= 18) console.log(`Eres mayor, edad ${age}`);
    else console.log(`Eres menor, edad ${age}`);
}

mayoeEdad(20);


// definiendo funcion
function mayorDeEdad (age, legaAge) {
    if (age >= legaAge) console.log(`Eres mayor, edad ${age}`);
    else console.log(`Eres menor, edad ${age}`);
}

mayorDeEdad(20, 18);


// return AISLANDO VARIABLES
function foo(){
    return 2;
}

const valor = foo();
console.log(valor);


// ES COMÍN  quitar el else cuando hay returns
function mayorDeEdad (age, legaAge) {
    if (age >= legaAge) return null;
    // if (age < legaAge) {
    //     return true;
    // } else { return false; }
    return age >= legaAge;   // es lo mismo que arriba
}


function sum (num1 = 0, num2 = 0){
    return num1 + num2;
}

const variable = sum(2, 6);
console.log(variable);


// VARIABLES FUNCION
function crearSaludo(nombre) {
    return `!Hola ${nombre}`;
}

const saludoPersona = crearSaludo;   // pasando la funcion
console.log(saludoPersona("Persona"))





//////
// EJERCICIO IMPARES
//////////////////
/*
const numbers = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101];
let oddNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  if (number % 2 !== 0) {
    // oddNumbers[oddNumbers.length] = number
    oddNumbers.push(number);
    // oddNumbers = oddNumbers.concat(number);
  }
}
console.log(oddNumbers);

const oddNumbers = foo(??, ??, ??, ??);
console.log(oddNumbers);
*/
//////
// EJERCICIO IMPARES
//////////////////
const numbers = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101];
let var1 = [];

function odd(array){
    for (i of array){
        if (i % 2 !== 0) {
            var1.push(i);
        }
    }
    return var1;
}

const oddNumbers = odd(numbers);
console.log(oddNumbers);

//////
// EJERCICIO IMPARES // FORMA CLASICA DE CREAR LA FUNCION
// FÍJATE QUE EL NOMBRE DE LA FUNCIÓN ESTÁ FUERA DE LA FUNCIÓN, LA DECLARAS.

const getOddNumbers = function (numbers) {
  const oddNumbers = [];
  for (number of numbers) {
    if (number % 2 !== 0) oddNumbers.push(number);
  }
  return oddNumbers;
};

console.log(getOddNumbers(numbers).join(" "));



// FUNCION FLECHA 
// arrow functions : intercambiamos "function" por "=>"
///////////////////////////////////////////////////////

const restar = (num = 1, num2 = 0) => {
    return num - num2;  // nunca te vas a encontrar una funcion flecha con return calculando
}

restar(10, 30);

// ESTA ES OTRA FORMA DE ESCRIBIRLO
const restar2 = (num = 1, num2 = 0) => (num - num2);  
console.log(restar2(10, 30));


/*
function activateAccount2 (name) {
    return {
        name: name,
        activate: true
    };
};
const user2 = activateAccount2("test");
console.log(user2);
*/

// 
const activateAccount = (name) => {
    return {
        name: name,
        activate: true
    };
};
const user1 = activateAccount("test");
console.log(user1);


const activateAccount2 = (name) => {
    const user3 = {
        // name: name,  // siempre que la key & valur tengan el mismo nombre, se puede recortar así:
        name,  // esto es lo mismo que esto --> name: name   <-- así nunca lo verás
        activate: true
    };
    return user3;
};

// LO MISMO PERO EN UNA LINEA -- ESTO SE USA MUCHO EN REACT. 
// Además el paréntesis lo puedes quitar (name)
const activateAccount3 = (name) => (
    {
        name,
        activate: true
    }
);



// PARÁMETROS REST : es una forma de poder acceder a todos ellos
const foo2 = (...params) => {
    console.log(params)
}

foo2(1,2,3,"prueba", true) //(5) [1, 2, 3, 'prueba', true]



const sumar = (...params) => {
    let resultado = 0;
    for (let number of params){ // fíjate que params es una array que le pasa al llmar la fucion
        resultado += number;
    }
    return resultado;
};

const result = sumar(1,2,3,4,5);
console.log(result) //15


// CLOSURES
const counter = () => {
    /**
     * funcion que retorna un objeto con varias funciones
    */
    let count = 0;

    const increment = () => count++; // incrementa el count
    const getCount = () => count;    // para conseguir el count
    const resetCount = () => count = 0; // reseteo

    return {
        increment,
        resetCount,
        count : getCount,
    };
};

const contador1 = counter();


console.log(contador1);
/**
 * cada llamada a cada método ejecutará su accion
 */
contador1.increment(); // incrementa el count
contador1.increment();
contador1.increment();

console.log(contador1.count()); // me dirá cuánto vale
console.log(contador1.resetCount()); // me dirá cuánto vale
console.log(contador1);



/**
 * EJERCICIO : 
 * crear un clousure de una calculadroa que pueda hacer las siguientes operciones guardando el resultado
 */


const calculadora = () => {
    let initialNumber = 0;

    const sumar = (number) => (initialNumber += number);
    const restar = (number) => (initialNumber -= number);
    const multiplicar = (number) => (initialNumber *= number);
    const dividir = (number) => (initialNumber /= number);

    return {
        sumar,
        restar,
        multiplicar,
        dividir
    };
};

let miCalculadora = calculadora();
console.log(miCalculadora.sumar(5));
console.log(miCalculadora.restar(2));
console.log(miCalculadora.multiplicar(4));
console.log(miCalculadora.dividir(2));
console.log(miCalculadora.sumar(10));


const calculadora2 = () => {
    let initialNumber = 0;

    return {
        sumar : (number) => (initialNumber += number),
        restar : (number) => (initialNumber -= number),
        multiplicar : (number) => (initialNumber *= number),
        dividir : (number) => (initialNumber /= number),
    };
};

miCalculadora = calculadora2();
console.log(miCalculadora.sumar(5));
console.log(miCalculadora.restar(2));
console.log(miCalculadora.multiplicar(4));
console.log(miCalculadora.dividir(2));
console.log(miCalculadora.sumar(10));



/**
 * PASAR UNA FUNCION COMO PARÁMETRO
 * - hasta ahora hemos ido pasando parámetros clásicos
 * - ahora vamos a poder pasar incluso una función, le llamo por ejemplo "operacion"
 */
const realizarOperaciones = (num1, num2, operacion) => {

    return operacion(num1, num2);
};

// funciones que reciben dos parámetros y realizan una operacion
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;

// puedo delegar a quien desarrolle esta linea, qué tipo de operación quiere
let resultadoSuma = realizarOperaciones(10, 20, suma); // 30
console.log(resultadoSuma);

let resultadoResta = realizarOperaciones(1, 2, resta); // -1
console.log(resultadoResta);

// literalmente metemos una funcion en el parámetro
let resultadoMensaje = realizarOperaciones(10, 20, function(num1, num2){ 
    console.log(num1, num2); // 10 20 
});
console.log(resultadoMensaje); //undefined