
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
