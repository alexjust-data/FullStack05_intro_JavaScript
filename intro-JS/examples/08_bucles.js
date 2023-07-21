
// for
for (let i = 0; i < 5; i++) {
    console.log(`Bloque ${i} dentro del for`)
}


let count = [];

for (let i = 0; i < 5; i++){
    console.log(`valor del i: ${i}`); //console.log("valor del i: ", i);
    count.push(i)
}
console.log("FIN", count);

// const numeros = [];
// numeros.push(1),
//   numeros.push(2),
//   numeros.push(3),
//   numeros.push("keepcoding"),
//   numeros.push(4),
//   numeros.push(5);

// console.log(numeros);


const fruits = ["apple", "banana", "kiwi"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

for (let i = 0; i < fruits.length; i++){
    if (fruits[i] !== "kiwi"){
        console.log(fruits[i]);
    }
}


// Palabras reservadas
console.log("----Continue y break----");

for (let index = 0; index < 10; index++) {
    console.log("index", index);
    
}
/*
index 0
08_bucles.js:47 index 1
08_bucles.js:47 index 2
08_bucles.js:47 index 3
08_bucles.js:47 index 4
08_bucles.js:47 index 5
08_bucles.js:47 index 6
08_bucles.js:47 index 7
08_bucles.js:47 index 8
08_bucles.js:47 index 9z
*/

console.log("----Continue example ----");

for (let index = 0; index < 10; index++) {
    if (index === 2 || index === 8) {
        continue;
    }
    console.log("index", index);
}
/*
----Continue y break----
08_bucles.js:69 index 0
08_bucles.js:69 index 1
08_bucles.js:69 index 3
08_bucles.js:69 index 4
08_bucles.js:69 index 5
08_bucles.js:69 index 6
08_bucles.js:69 index 7
08_bucles.js:69 index 9
*/



console.log("---- break example ----");

for (let index = 0; index < 10; index++) {
    if (index === 2 || index === 8) {
        break;
    }
    console.log("index", index);
}
/*
---- end Continue/break example ----
index 0
index 1
*/



///////////////
// EJERCICIO //
///////////////

/*
Enunciado: Dada una lista de números, crea una nueva lista que contenga únicamente los números impares de la lista original.

Lista de números: 1, 2, 33, 41, 5, 60, 74, 87, 90, 101

Paso 1: Crea un array llamado numbers que contenga al menos estos números
Paso 2: Crea un array vacío llamado oddNumbers.
Paso 3: Utiliza un bucle for para iterar sobre cada número en la lista numbers.
Paso 4: En cada iteración, verifica si el número actual es impar.
        Si es impar, agrégalo al array oddNumbers utilizando el método push().
        NOTA: números pares son aquellos que al dividirlos por 2 el residuo/resto es 0
Paso 5: Después del bucle, imprime en la consola el contenido del array oddNumbers.
*/
const numbers = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101];
let oddNumbers = [];

for (let index = 0; index < numbers.length; index++) {
    if ((numbers[index] % 2) !== 0){
        oddNumbers.push(numbers[index]);
    }
}    
console.log(oddNumbers);


///////////
// WHILE //
///////////


i = 0;

while (i <= 5) {
    console.log("print : ", i);
    i++;
}

// infinito
while (true) {
    const message = prompt("¿exit? Y o N"); // pregunto al usuario en bucle infinito
    if (message === "Y") break;             // rompo en bluce según condicion
    else console.log("message : ", message);
}


///////////////
// EJERCICIO // piedra papel tijera
///////////////

debugger; 

// vamos apreguntar al usuaior su jugada. que tiene que ser "piedra" "papel" o "tijera"
// si no es ninguna mostrar un mensaje de "opbión incorrecta"
// si el usuario quiere salir que escriba "salir"

// mensajes "ganaste" tu tienes papel y el rival piedra"
const rival = "piedra"; // el rival siempre va a tener piedra.

const cartas = ["piedra", "papel", "tijera"];


while (true) {
    const message = prompt("¿piedra, papel o tijera?");

    if (cartas.includes(message)) {
        if (message === "papel") console.log("ganaste tu tienes papel y el rival piedra");
        else if (message === rival) console.log("empate, tu rival también tiene piedra");
        else console.log("perdiste, tu tienes tijeras y tu rival tiene piedra");

    }
    else if (message === "salir") break;
    else console.log("opción incorrecta");
}

/*
El método prompt() bloquea la ejecución del script mientras el cuadro de diálogo está abierto, 
lo cual te impide abrir las herramientas de desarrollador para ver la consola.

Una alternativa es modificar la lógica de tu programa para que no utilice un bucle infinito. 
En lugar de usar while (true), puedes reestructurar el código para usar una función que se llama a sí misma, 
permitiendo que la página y las herramientas de desarrollador sigan siendo interactivas.
*/


function startGame() {
    const message = prompt("¿piedra, papel o tijera?");
    if (cartas.includes(message)) {
        if (message === "papel") console.log("ganaste tu tienes papel y el rival piedra");
        else if (message === rival) console.log("empate, tu rival también tiene piedra");
        else console.log("perdiste, tu tienes tijeras y tu rival tiene piedra");
        setTimeout(startGame, 100); // Continua el juego si el mensaje es válido
    }
    else if (message !== "salir") {
        console.log("opción incorrecta");
        setTimeout(startGame, 100); // Continua el juego si el mensaje no es 'salir'
    }
    // Si el mensaje es 'salir', no llamamos a startGame de nuevo, lo que termina el juego
}

startGame(); // Inicia el juego


/*
En esta versión, si la entrada del usuario es válida (está en cartas) o inválida pero no es 'salir', 
el juego se continuará llamando a startGame() después de un breve retraso. Esto permitirá que la página y 
las herramientas de desarrollador sigan siendo interactivas, lo que significa que podrás abrir la consola  
para ver la salida de console.log(). Si el usuario ingresa 'salir', el juego se detendrá ya que no volveremos 
a llamar a startGame().
*/


