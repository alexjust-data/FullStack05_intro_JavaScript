
/**
 * DESTRUCTURING
 */


// acedemos a los arrays

const arr = [
    "message1",
    "message2",
    "message3"
];
arr[0] //"message1"
arr[1] //"message2"
arr[2] //"message3"

// destructuring... 

const [position1, position2] = arr;
console.log(position1); // message1
console.log(position2); // message2

const [a, b] = arr;
console.log(a); // message1
console.log(b); // message2

const [ , , position3] = arr;
console.log(position3); // message3

// con objetos

const user = {
    name : "alex",
    age : 30
};
user.name; // alex
user.age; // 30


// destructuring... 

// const { age, name } = user;
// console.log(name);
// console.log(age);

const { age, name : firtsName } = user; // le ponemos un apodo a la key
console.log(firtsName); //alex
console.log(age); //30
console.log(user); //{name: 'alex', age: 30}



/**
 * Este codigo está bien pero...
 */

const libros = [
    { titulo: "El gran Gatsby", autor: "F. Scott Fitzgerald", año: 1925 },
    { titulo: "1984", autor: "George Orwell", año: 1949 },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", año: 1967, },
    { titulo: "Harry Potter y la piedra filosofal", autor: "J.K. Rowling", año: 1997, },
    { titulo: "El código Da Vinci", autor: "Dan Brown", año: 2003 },
    { titulo: "Crepúsculo", autor: "Stephenie Meyer", año: 2005 },
    { titulo: "Los juegos del hambre", autor: "Suzanne Collins", año: 2008 },
  ];

const post2kTitles = libros
  .filter((libro) => libro.año > 2000)
  .map((libroPost2k) => libroPost2k.titulo);

console.log(post2kTitles);

/**
 * ... puedes encontrártelo con destructuring
 */

const post2kTitle = libros
  .filter(( {año} ) => año > 2000)  // entendemos que en cada iteracino tenemos un libro
  .map(( {titulo} ) => titulo);      // entendemos que en cada iteracino tenemos un titulo




/** EJERCICIO CALCULADORA
 * Este codigo está bien pero...
 */

const calculadora = (value) => {
let result = 0;

const sumar = (value) => (result += value);
const restar = (value) => (result -= value);
const multiplicar = (value) => (result *= value);
const dividir = (value) => (result /= value);

return {
    sumar,
    restar,
    multiplicar,
    dividir,
};
};

const miCalculadora = calculadora();

console.log(miCalculadora.sumar(5)); // Debería imprimir 5
console.log(miCalculadora.restar(2)); // Debería imprimir 3
console.log(miCalculadora.multiplicar(4)); // Debería imprimir 12
console.log(miCalculadora.dividir(2)); // Debería imprimir 6
console.log(miCalculadora.sumar(10)); // Debería imprimir 16


/**
 * ... puedes encontrártelo con destructuring
 */

// en vez de crar el objeto entero ->  const miCalculadora = calculadora();
// sacamos los métodos que nos interesan
const { restar, multiplicar, dividir : div } = calculadora();

multiplicar(4);
restar(10);
div(2);




/**
 * podemos quitar ciertas propiedades
 */
const transactions = [
    { id: 'trx001', amount: 100, description: 'Purchase 1' },
    { id: 'trx002', amount: 50, description: 'Purchase 2' },
    { id: 'trx003', amount: 200, description: 'Purchase 3' },
  ];

const transaction1 = { id: 'trx001', amount: 100, description: 'Purchase 1' };

// const {id, ...rest} = transaction1;   // estoy aislando elementos del objeto
// const transactionNuevo = structuredClone(rest);
// console.log("transactionNuevo", transactionNuevo); //{amount: 100, description: 'Purchase 1'}

const {id, amount, ...rest} = transaction1;   // estoy aislando dos elementos del objeto
const transactionNuevo = structuredClone(rest);
console.log("transactionNuevo", transactionNuevo); //{description: 'Purchase 1'}




const useProfile = () => {
    const data = 0;
    const setData = (value) => data = value;
    return [data, setData]
};

const [data, setData] = useProfile(); //[]