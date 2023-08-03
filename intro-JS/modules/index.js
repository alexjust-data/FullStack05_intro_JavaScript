//import { sumScores } from "./utils.js";
//import { sumScores as sumar } from "./utils.js";
//import calculadora from "./utils.js";
import calculadora, { sumScores, suma } from "./utils.js";
// const utils = require{"./utils.js"}  <-- así sería para node.js


console.log("index");


// utilizando  sumScores
let estudiantes = [
    {
        name: "Alex",
        age : 23,
        cursos : [
            {
                name : "Mates",
                score : 95
            },
            {
                name : "History",
                score : 76
            }
        ]
    },
    {
        name: "Nuria",
        age : 23,
        cursos : [
            {
                name : "Mates",
                score : 945
            },
            {
                name : "History",
                score : 746
            }
        ]
    }
];

const newList = estudiantes.map(student => {
    const courseScore = sumScores(student.cursos); // jemos importado sumScores de utils
    return{
        name : student,
        age : student.age,
        courseScore
    };
});
console.log(newList);



// utilizando calculadora 
// let miCalculadora = calculadora();
// console.log(miCalculadora.sumar(5));
// console.log(miCalculadora.restar(2));
// console.log(miCalculadora.multiplicar(4));
// console.log(miCalculadora.dividir(2));
// console.log(miCalculadora.sumar(10));




// datea
const currentDate = new Date();

console.log(currentDate);
console.log(currentDate.getFullYear());
console.log(currentDate.getDate());
console.log(currentDate.getHours());
console.log(currentDate.getTime()); // fecha como valor numerico
// moment.js es una libraría de fechas que más se usa para formatear (pero nadie la dan soporte
// luxon es otra libreía. day.js



// regex

const texto = "HOla, mi telefono es 123-125-5456";
let pattern = /\d{3}-\d{3}-\d{4}/;
// para usar las regex
console.log(pattern.test(texto));
console.log(texto.match(pattern));
console.log(texto.replace(pattern, "******"));


