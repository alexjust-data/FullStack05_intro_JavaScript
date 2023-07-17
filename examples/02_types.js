
// typeof
let resultado = 10;
console.log(typeof(resultado));

resultado = true;
console.log(typeof resultado)

// boolean
resultado = true;
console.log(typeof resultado);

let precio = 185233.25; // en JS esto es numérico no float
console.log(typeof precio);

let cantidad = Infinity; // es tipo number
console.log(typeof cantidad);

// null y undefined
let variableNula = null; // la declaro nula
let variableIndefinida;

console.log(typeof variableNula); //object
console.log(typeof variableIndefinida); //undefined

let portal = "1D";
let direccion1 = "Calle Maravillas"
console.log("--direction--"); 
console.log(typeof direccion1); //string
console.log(direccion1)

// template string
// permite declarar variables dentro del comillado
let direccion2 = `Calle Maravillas, ${portal}`;
console.log("--template string--")
console.log(direccion2)

// Bigint
let numeroGrande = 4726726354267548876348736487364n; //bigint
console.log(typeof numeroGrande)


let years = 35;
let jugador = "Jordan";
let dorsal = 23;
let salonFama = true;
let actualTeam = null;

let mensaje = `Soy ${jugador} de ${years} años, ahora mi equipo es: ${actualTeam}`;
console.log(mensaje)