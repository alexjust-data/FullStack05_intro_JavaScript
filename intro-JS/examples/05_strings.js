
// ejemplos strings

let username = "keepcoding_user";

console.log(username.length); // cuenta la cadena
console.log(username.toUpperCase()); // todo mayúscula


const minLenght = 10;

if(username.length > minLenght){
    // progrmar el error
    let extra = username.length - minLenght;
    console.log(`Has puesto ${extra} caracteres de más`);
}


let number = "10";

