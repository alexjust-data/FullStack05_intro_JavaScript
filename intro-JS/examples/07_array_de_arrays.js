

// cada array tiene 5 elementos
const matrix2 = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15]
];

console.log(matrix2); // [Array(5), Array(5), Array(5)]

console.log(matrix2[0]); // [1,2,3,4,5]

console.log(matrix2[1][0]); // [6]

// quitando ultimo elemento
matrix2.pop();
console.log(matrix2); // [Array(5), Array(5)]



// 
console.log("--matrix--");

const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(matrix);


console.log("--matrix in loop--");
for (let index = 0; index < matrix.length; index++) {
    const element = matrix[index];
    console.log(element)
}
/*
(3) [1, 2, 3]
(3) [4, 5, 6]
(3) [7, 8, 9]
*/

console.log("--matrix in loop in loop--");
for (let i = 0; i < matrix.length; i++) {
    const element = matrix[i];
    for (let j = 0; j < element.length; j++) {
        console.log(element[j])
    }
}
/*
1
2
3
4
5
6
7
8
9
*/



// Crear un array bidimensional con 5 columnas y con 3 filas como las que aparecen abajo

/*

--*--
-***-
*****

Luego de definirlo recorrerlo para que se pinte como en el dibujo
*/

const array = [
    ['-', '-', '*', '-', '-'],
    ['-', '*', '*', '*', '-'],
    ['*', '*', '*', '*', '*']
  ];

console.log("--ejercicio--");

for (let i = 0; i < array.length; i++) {
    let row = "";
    for (let j = 0; j < array[i].length; j++) {
        row += array[i][j];
    }
    console.log(row)
}






