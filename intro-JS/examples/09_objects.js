
// objects

let car = {};



console.log(typeof car);

car.brand = "Ford";
car.year = 1976;
car.model = "Mustang";
car.firsOwner = "KeepCodnig"
// añado objeto dentro de objeto
car.country = {}; 
car.country.code = "us";
car.country.name = "USA";

console.log(car);



car = {
    brand:"Ford",
    country: {
        code: "us",
        name: "USA",
    },
    firsOwner: "KeepCodnig",
    "second_Owner" : "Alex",
    model: "Mustang",
    year: 1976,
}

// CREANDO OBJETOS
let user = {
    name : "Alex",
    Age : 23,
    hobbies : ["futbol", "bascket"]
};


console.log(car.country.code);
console.log(car["brand"]);
console.log(car["country"]);
console.log(user.hobbies[0]);
console.log(user.hobbies.join(", ")); // uno los hobiies

// BOORANDO  propiedades
delete user.Age;


// CREANDO OBJETO
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

// ACCEDIENDO a los elementos
console.log(estudiantes[1].cursos[1].score);


// ACCEDIENDO en loop
for (let i = 0; i < estudiantes.length; i++){
    const students = estudiantes[i];
    const courses = students.cursos;
    for (let j = 0; j < courses.length; j++) {
        const course = courses[j];
        console.log(course.score, course.name)
    }
}

//ACCEDIENDO por funcion
const key = Object.keys(user);
const value = Object.values(user);
console.log("Imprimiendo keys : ", key); // ['name', 'hobbies']
console.log("Imprimiendo values : ", value); // ['Alex', Array(2)]

// RANDOM OBJECTS
const randomValue = Math.random() * 3; // numeros random 1 2 3
const randomIndex = Math.floor(randomValue); // guardo aleatorio

const options = ["piedra", "papel", "tijeras"]; 
console.log(options[randomIndex]) // aplico aleatorio



/* LOOPS FOR --> for-in  //  for-of */

for (let i in user){
    console.log(i)     // tijeras name hobbies
}

for (let i in user){
    if (i === "hobbies") console.log(user.hobbies);     // ['futbol', 'bascket']
}

for (let i in user){
    if (i === "hobbies") console.log(i);    
    const hobbies = user.hobbies;
    console.log(`tiene hobbies : ${hobbies.join(" | ")}`); // tiene hobbies : futbol | bascket
}

const llave = "hobbies";
for (let j in user){
    if (j === llave) {
        const keyValue = user[llave];
        console.log(`tiene ${llave} y el valor es ${keyValue}`);
    }
};


// FOR OF recorre elementos que son iterables
const arr = [1,3,34,54];
const word = "Alex";

for (let i of arr){
    console.log(i);
}


// FOR OF recorre elementos que son iterables
const tree = [
    ["-", "-", "*", "-", "-"],
    ["-", "*", "*", "*", "-"],
    ["*", "*", "*", "*", "*"],
  ];

for (i of tree){         // FOR OF recorre vectores
    let line = "";
    for (j of i){        // FOR OF recorre elementos de vectores
        line += j;
    }
    console.log(line);
}

for (i of tree){         
    console.log(i.join("")); // join de los elementos del vector
}

/*
Cuando trabajas en equipo hay una discusión sana
de como se itera.
*/