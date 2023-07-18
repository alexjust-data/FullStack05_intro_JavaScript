
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

/* si esto es verdadero ---  esto es verdad -sino- esto es verdad */
const message = resultado ? "Tienes mi edad" : "No tienes mi edad"
console.log(message);

console.log("<--exemple-->");
// valores falsos
let value1 = NaN;
let value2 = null;
let value3 = undefined;
let value4 = "";

if (value4 !== "") {
    console.log(`value: ${value1}`)
} else {
    console.log("Else ->", value2)
}



// switch -> casi no se uda

let day = "Tuesday";

if (day === "Monday"){
    console.log("It´s Monday");
} else if (day === "Tuesday") {
    console.log("It´s Tuesday");
} else {
    console.log("It is neither MOnaday, Tuesday");
} 


switch (day) {
    case "Monday": 
        console.log("It´s Monday");
        break;
    case "Tuesday":
        console.log("It´s Tuesday");
        break;
    default:
        console.log("It is neither MOnaday, Tuesday");
        break;
}


// usamos una función del navegador prompt
let day2 = prompt("Give me a day of the week: ");

if (day2 === "Monday"){
    console.log("It´s Monday");
} else if (day2 === "Tuesday") {
    console.log("It´s Tuesday");
} else {
    console.log("It is neither Monaday, Tuesday");
} 



// problema transformar temperaturas
let temperatura = parseFloat(prompt("Ingresa la temperatura:"));
let escala = prompt("Ingresa la escala a la que quieras cambiar tu temperatura (C o K):");

if (escala === "C") {
    let kelvin = temperatura + 273.15;
    console.log(temperatura + " °C son " + kelvin + " K");
  } else if (escala === "K") {
    let celsius = temperatura - 273.15;
    console.log(temperatura + " K son " + celsius + " °C");
  } else {
    console.log("Escala no válida. Por favor, ingresa 'C' o 'K'.");
  }


// problema transformar temperaturas
  temperatura = escala === "C" ? temperatura - 273.15 : temperatura + 273.15;

  console.log(temperatura)

  