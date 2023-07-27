
/**
 * La programacion funcional es una paradigma de programacion
 * que se centra en el uso de funciones como bloques de construccion fundamentales. 
 * En el contexto de Javascript, laprogramación funcional implica escribir código que 
 * se basa en funciones puras, evitando el uso de estado y efectos secundarios.
 * 
 * La programación funcional es un paradigma de programación que trata la computación 
 * como la evaluación de funciones matemáticas y evita cambiar el estado y los datos 
 * mutables. Se enfoca en las expresiones en lugar de las instrucciones y utiliza 
 * funciones de primera clase y funciones de orden superior. Ayuda a escribir 
 * código más predecible y más fácil de probar y depurar.
 */

/**
 * Las funciones puras son funciones que siempre producen el mismo resultado dada la 
 * misma entrada y no producen efectos secundarios, es decir, no modifican ninguna 
 * variable o estado fuera de la función. Son fundamentales en la programación funcional 
 * y facilitan la depuración y el testing.
 */


/**
 * Esta función suma es pura porque cumple con las dos reglas de las funciones puras:
 * 1- Dados los mismos argumentos, siempre devuelve el mismo resultado. 
 *    No importa cuántas veces llames a suma(5, 3), siempre obtendrás 8.
 * 2- No tiene efectos secundarios. No modifica ninguna variable fuera de la función, 
 *    no cambia el estado de la aplicación, ni afecta a algo más que no sea su entrada y salida.
 */
function suma(a, b) {
    return a + b;
  }
  
console.log(suma(5, 3));  // Imprime: 8


/**
 * Esta función incrementarContador no es pura por dos razones:
 * 1- No devuelve el mismo resultado para los mismos argumentos. 
 *    Aunque llamamos a incrementarContador(5) dos veces, la variable contador 
 *    no tiene el mismo valor después de cada llamada.
 * 2- Tiene un efecto secundario: modifica la variable contador que está fuera de la función. 
 *    Esto significa que el estado de la aplicación cambia cada vez que se llama a la función.
 */
let contador = 0;

function incrementarContador(valor) {
  contador += valor;
}

incrementarContador(5);
console.log(contador);  // Imprime: 5

incrementarContador(5);
console.log(contador);  // Imprime: 10


// NO PURA :(
const datos = []; // una funcion pura no modifica una variable global

const addElement = (arr, newElement) => {   // una funcion pura al llamar varias veces
    arr.push(newElement);                   // siempre devuelve lo mismo.
    return arr;
};
console.log(addElement(datos, "Elemento")); // ['Elemento']
console.log(addElement(datos, "Elemento")); // ['Elemento', 'Elemento']
console.log(datos);                         // variable global modificada: ['Elemento', 'Elemento']
// PROGRAMACION FUNCIONAL : este tipo de funciones es lo que intenta evitar la 



/** INMUTABILIDAD 
 * La inmutabilidad es un concepto fundamental en la programación funcional que se 
 * refiere a la incapacidad de un objeto para cambiar su estado después de que ha sido creado. 
 * En otras palabras, una vez que se establece un valor para una variable o un objeto, no puedes cambiar ese valor.
 * EN JS SE ALIENTA EL USO DE ESSTRUCTURAS DE DATOS INMUTABLES, lo que significa que se crean nievas instancias
 * en lugar de moficiar las existentes.
 */

console.log("INMUTABILIDAD 1");

const shoppingCart1 = ["food", "TV", "PC"];
console.log(shoppingCart1);

const shoppingCart2 = shoppingCart1; // MAL, por copiar una te modifica las dos.
shoppingCart2.pop();

console.log(shoppingCart1); 
console.log(shoppingCart2);

console.log("INMUTABILIDAD 1 : solucion");

const shoppingCart3 = [].concat(shoppingCart1); // copio
console.log(shoppingCart1); // ['food', 'TV']
console.log(shoppingCart3); // ['food', 'TV']

shoppingCart3.push("nuevo");
console.log(shoppingCart3); // ['food', 'TV', 'nuevo']

const shoppingCart4 = [...shoppingCart1]; // copio [es exactamente lo mismo que lo anterior]
console.log(shoppingCart4); // ['food', 'TV']

const shoppingCart5 = [...shoppingCart1, ...shoppingCart3]; // está concatenando varios objetos
console.log(shoppingCart5); // ['food', 'TV', 'food', 'TV', 'nuevo']


console.log("INMUTABILIDAD 2");

const user1 = {        // imaginate que quieres cambiar una de las propiedades
    education : "keepcoding",
    name : "Alex",
}
const user2 = user1;   // lo lógico es copiarte el objeto y cambias la propiedad
user2.name = "Nico";   // MAL, por copiar una te modifica todas. user1 y user2
console.log(user1);    // {education: 'keepcoding', name: 'Nico'}
console.log(user2);    // {education: 'keepcoding', name: 'Nico'}

/**
 * moraleja, en OBJETOS y ARRAYS nunca podremos copiar litaras dos variables
 */

// OBJETOS
console.log("OBJETO user5");

const user5 = {
    education : "keepcding",
    name : "Alex",
}

const user6 = Object.assign({}, user5); // Esto fuciona tambiém, pero siempre usarás 
const user7 = {...user5};               //pero siempre usarás esta forma
user6.name = "MAtt";
user7.name = "Pepe";

console.log(user5); // {education: 'keepcding', name: 'Alex'}
console.log(user6); // {education: 'keepcding', name: 'MAtt'}
console.log(user7); // {education: 'keepcding', name: 'Pepe'}


// OBJETOS con estructura compleja
const user8 = {
    education : "keepcding",
    name : "Alex",
    city : {
        name : "Madrid"
    }
}
const user9 = structuredClone(user8); // copio
user9.name = "Juan";                  // cambio primer nivel
user9.city.name = "London";           // cambio segundo nivel

console.log(user8); // {education: 'keepcding', name: 'Alex', city: {…}}
console.log(user9); // {education: 'keepcding', name: 'Juan', city: {…}}


// TRUCO de STRING (json) a OBJETO
var a = {data : "a"};
//JSON.stringify(a); // CONVIERTE OBJETO A STING
//JSON.parse("{data: 'a'}"); // CONVIERTE STRING A OBJETO
const user10 = JSON.parse(JSON.stringify(user8));
console.log(user10);



/**
 * ARREGLA ESTE CODIGO PARA QUE SEA FUNCION PURA
 */
console.log("arregla1");
let data = [];

const addElemento = (arr, newElement) => {
  arr.push(newElement);
  return arr;
};
console.log(addElemento(data, 'Elemento')); /// ['Elemento']
console.log(addElemento(data, 'Elemento')); /// ['Elemento']
console.log(addElemento(data, 'Keepcoding')); /// ['Keepcoding']
console.log(addElemento(data, 'Keepcoding')); /// ['Keepcoding']
console.log(data); // []

//////////1
console.log("arregla2");
data = [];
const addElement2 = (arr, newElement) => {
    return [...arr, newElement]; /// todo lo que haya en data + incremento
};

console.log(addElement2(data, 'Elemento')); /// ['Elemento']
console.log(addElement2(data, 'Elemento')); /// ['Elemento']
console.log(addElement2(data, 'Keepcoding')); /// ['Keepcoding']
console.log(addElement2(data, 'Keepcoding')); /// ['Keepcoding']
console.log(data); // []

///////////2
console.log("arregla3");
data = [];
const addElement3 = ([...arr], newElement) => {
    arr.push(newElement);  /// todo lo que haya en [...data] + incremento
    return arr;
};

console.log(addElement3(data, 'Elemento')); /// ['Elemento']
console.log(addElement3(data, 'Elemento')); /// ['Elemento']
console.log(addElement3(data, 'Keepcoding')); /// ['Keepcoding']
console.log(addElement3(data, 'Keepcoding')); /// ['Keepcoding']
console.log(data); // []
//////////



// UNIENDO OBJETOS
const house1 = {
    address: "Madrid",
    rooms: 5,
};

const house2 = {
    address: "Barcelona", // CUANDO HAY DOBLE KEY SE QUEDA CON LA DEL PRINCIPIO
    rooms: 4,
    parking: true,
};

const newHouse = {
    ...house1,
    ...house2,
}

console.log(newHouse);

// otra forma de verlo, el cambio siempre al final
const newHouse2 = {...house1, ...house2, adress: "Valencia"};


/**
 * FUNCION COMPOSICION : se refiere a a combinacjopn de multiplis ficnioes 
 * más pequeñas para crear funciones más complejas
 */


// map, filter, forEach
const numbers = [1,2,3,4,5,6,7];

// let double = [];
// for (const iterator of numbers) {
//     double.push(iterator * 2);
// };

// SIEMPRE QUE TENEMOS UN ARRAY --> TENEMOS MÉTODOS [].
// queremos multiplicar por 2 nuestro elemento


// map se ejecuta por cada elemento
// maps es inmutable, no modifica el array anterior como sucedí antes.
const newArray = numbers.map( function(item) {
    return item * 2;
});
console.log(newArray)

// variantes con funcion compuesta
const double = (number) => number * 2;
const newArray2 = numbers.map( function(item) {
    return double(item);
});
console.log(newArray2)

// variantes
const newArray3 = numbers.map((item) => double(item));
console.log(newArray3)

// variante => double = (number) => number * 2;
const newArray4 = numbers.map( double );
const newArray5 = numbers.map( (number) => number * 2 );



/**
 * FILTER
 * la diferencia es que funciona como un booleano
 */

const filterArray = numbers.filter( (elem) => {
    if (elem <= 33) return true;
    return false;
})
console.log(filterArray) // [1, 2, 3, 4, 5, 6, 7]

// refactoring
const filterArray2 = numbers.filter( (elem) => {
    return elem <= 33;
});
console.log(filterArray) // [1, 2, 3, 4, 5, 6, 7]

// refactoring
const filterArray3 = numbers.filter( (elem) => elem <= 33);
console.log(filterArray3) // [1, 2, 3, 4, 5, 6, 7]


// VARIANTES : APLICAMOS VARIAS FUNCIONES
const filterArray4 = numbers.filter( (elem) => (elem <= 33) ).map(double); // mapea lo filtrado y *2
console.log(filterArray4) // [2, 4, 6, 8, 10, 12, 14]


// ejercicio

const num = [1,2,33,41,60,74,87,90,101];
let addNumbers = [];

const num_par = num.filter( (elem) => (elem % 2 === 0) );
console.log(num_par)


/**
 * FOR EACH - no se usa mucho, ya esta map
 */

const doubleArray = [];

numbers.forEach(element => {
    doubleArray.push(element*2);
});
console.log(doubleArray);



// ejercicio
/*
Ejercicio: Filtrar y transformar un array de objetos

Enunciado: 
Dado un array de objetos que representan libros, utiliza filter para filtrar 
los libros cuyo año de publicación sea posterior a 2000 y luego utiliza map para 
crear un nuevo array con los títulos de esos libros.

titulo: El gran Gatsby | autor: F. Scott Fitzgerald | año: 1925
titulo: 1984 | autor: George Orwell | año: 1949
titulo: Cien años de soledad | autor: Gabriel García Márquez | año: 1967
titulo: Harry Potter y la piedra filosofal | autor: J.K. Rowling | año: 1997
titulo: El código Da Vinci | autor: Dan Brown | año: 2003
titulo: Crepúsculo | autor: Stephenie Meyer | año: 2005
titulo: Los juegos del hambre | autor: Suzanne Collins | año: 2008
*/

let libros = [
    { titulo: "El gran Gatsby", autor: "F. Scott Fitzgerald", año: 1925 },
    { titulo: "1984", autor: "George Orwell", año: 1949 },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", año: 1967 },
    { titulo: "Harry Potter y la piedra filosofal", autor: "J.K. Rowling", año: 1997 },
    { titulo: "El código Da Vinci", autor: "Dan Brown", año: 2003 },
    { titulo: "Crepúsculo", autor: "Stephenie Meyer", año: 2005 },
    { titulo: "Los juegos del hambre", autor: "Suzanne Collins", año: 2008 }
];

let librosFiltrados = libros
    .filter(libro => libro.año > 2000)
    .map(libro => libro.titulo);

console.log(librosFiltrados);
