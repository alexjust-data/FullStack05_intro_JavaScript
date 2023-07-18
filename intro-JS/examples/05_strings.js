
// ejemplos strings

let username = "keepcoding_user";

console.log(username.length); // cuenta la cadena
console.log(username.toUpperCase()); // todo mayúscula
console.log(username.toLowerCase()); // todo a minuscula


const minLenght = 10;

if(username.length > minLenght){
    // progrmar el error
    let extra = username.length - minLenght;
    console.log(`Has puesto ${extra} caracteres de más`);
}


// prompt
let number = prompt("dame un numero"); // el prompt siempre pasa un string sea lo que sea

number = "12"; // si te pasa el prompt un string lo puedes resolver así.
console.log(parseFloat(number)); // siempre nos comvierte a número
console.log(Boolean(number)); // lo convierte boolean false cuendo está vacío
console.log(Number(number)); // siempre nos comvierte a número



// sobre todo estos metodos nos ayudan a validad lo que entra el usuario

const word = "keepcoding"
console.log(username.includes(word)); // ¿esxist esto dentro de username?
const includesKeepcoding = username.includes("keepcoding");


const includesAWord = username.toLowerCase().includes("KEEpcodINg"); // limpio todo a minuscula icomprube si existe
console.log(username.includes(includesAWord));


// no te fies de lo que te pasa el usuario
let textWithSpaces = `   Hello ${username}       `; // ¿como quitamos os espacios?
console.log(textWithSpaces)

console.log(textWithSpaces.trim()); // emos quitado caratceres que no queremos
// por ejemplo en las temperaturas de antes si te ponen "C" === " C" el espacio lo quitas


// Ejercicio: Mejorar las validaciones del Conversor de temperaturas
let temperatura = parseFloat(prompt("Ingresa la temperatura:"));
let escala = prompt("Ingresa la escala a la que quieras cambiar tu temperatura (C o K):").toUpperCase().trim();

if (escala === "C") {
  let kelvin = temperatura + 273.15;
  console.log(temperatura + " °C son " + kelvin + " K");
} else if (escala === "K") {
  let celsius = temperatura - 273.15;
  console.log(temperatura + " K son " + celsius + " °C");
} else {
  console.log("Escala no válida. Por favor, ingresa 'C' o 'K'.");
}


// Ejercicio: Mejorar las validaciones del Conversor de temperaturas
let temperatura1 = parseFloat(prompt("Ingresa la temperatura:")); // y si ponen cualquier cosa?? aparecen NaN
let escala1 = prompt("Ingresa la escala a la que quieras cambiar tu temperatura (C o K):").toUpperCase().trim();

// para JS NaN !== NaN
/*if (temperatura === NaN) {}*/
if (isNaN(temperatura1)) {
    console.log("Pon un numero")
} else if (escala === "C") {
  let kelvin = temperatura1 + 273.15;
  console.log(temperatura1 + " °C son " + kelvin + " K");
} else if (escala === "K") {
  let celsius = temperatura1 - 273.15;
  console.log(temperatura1 + " K son " + celsius + " °C");
} else {
  console.log("Escala no válida. Por favor, ingresa 'C' o 'K'.");
}