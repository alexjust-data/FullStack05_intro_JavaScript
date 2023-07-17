
// ejemplos de if, else, if else, switch

//debugger; // paramos la ejecución aquí, pasamos de linea en linea
let edad = 18;

console.log("Inicio");

if (edad >= 18) {
    let edad = 1; // las varibles definidas dentro de las llaves viven sólo ahí dentro
    console.log(`Eres mayor de edad "${edad}" años`); // 1 año
} else {
    console.log(`No eres mayor de edad`);
}

console.log("Final", edad);


console.log("Inicio2");

if (edad >= 18) {
    let edad = 1; // las varibles definidas dentro de las llaves viven sólo ahí dentro
    console.log(`Eres mayor de edad "${edad}" años`); // 1 año
} else if (14 < edad && edad < 18) {
    console.log(`Eres adolescente`);
} else {
    console.log(`No eres "mayor" de edad`);
}

console.log("Final2", edad);


// ternario
const resultado = edad === 25; //booleano
// si esto es verdadero ---  esto es verdad -sino- esto es verdad
const message = resultado ? "Tienes mi edad" : "No tienes mi edad"
console.log(message);