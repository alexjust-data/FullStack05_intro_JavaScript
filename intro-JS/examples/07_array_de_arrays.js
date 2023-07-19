
//
const matrix = [1,2,3,4,5];

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
