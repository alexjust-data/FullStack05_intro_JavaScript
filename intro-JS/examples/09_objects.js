
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

console.log(estudiantes[1].cursos[1].score);

for (let i = 0; i < estudiantes.length; i++){
    const students = estudiantes[i];
    const courses = students.cursos;
    for (let j = 0; j < courses.length; j++) {
        const course = courses[j];
        console.log(course.score, course.name)
    }
}



// RANDOM OBJECTS
const randomValue = Math.random() * 3; // numeros random 1 2 3
const randomIndex = Math.floor(randomValue); // guardo aleatorio

const options = ["piedra", "papel", "tijeras"]; 
console.log(options[randomIndex]) // aplico aleatorio