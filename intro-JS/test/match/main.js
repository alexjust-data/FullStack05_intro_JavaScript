import { createMatch, playMatch, getPairs } from './match.js';






const players = ['Alberto Casero', 'David Jiménez', 'Javier de Miguel', 'Eduardo Aguilar'];
const [pair1, pair2] = getPairs(players);


// SEMIFINALES
const match1 = createMatch(pair1[0], pair1[1]);
const match2 = createMatch(pair2[0], pair2[1]);

const winner1 = playMatch(match1);
const winner2 = playMatch(match2);

console.log(`Winner: ${winner1}`);
console.log(`Winner: ${winner2}`);

// FINAL
const final = createMatch(winner1, winner2);

const finalWinner = playMatch(final);
console.log(`-----------------------`);
console.log(`FINAL Winner: ${finalWinner}, !!!!!! `);
console.log(`-----------------------`);






// const players = ['Alberto Casero', 'David Jiménez', 'Javier de Miguel', 'Eduardo Aguilar'];

// // Obtener el primer par de jugadores
// const { players: remainingPlayers, players2: pair1 } = getPlayers(players);

// // Obtener el segundo par de jugadores con los jugadores restantes
// const { players2: pair2 } = getPlayers(remainingPlayers);



// // SEMI FINALES - MATCH 1
// const match1 = createMatch(pair1[0], pair1[1]);
// console.log(match1); // Imprime el primer partido creado

// while (!match1.getWinner()) {
//   const randomPoint = Math.floor(Math.random() * 2) + 1;
//   match1.pointWonBy(randomPoint);

//   // líneas para ver la progresión del juego
//   console.log('\n-------------\nCurrentRoundScore : ', match1.getCurrentRoundScore());
//   console.log('getMatchScore (rounds) : ', match1.getMatchScore());
//   console.log('GameScore (games won) : ', match1.getGameScore());
// }

// console.log(`Winner: ${match1.getWinner()}`);

// // SEMI FINALES - MATCH 2
// const match2 = createMatch(pair2[0], pair2[1]);
// console.log(match2); // Imprime el segundo partido creado

// while (!match1.getWinner()) {
//   const randomPoint = Math.floor(Math.random() * 2) + 1;
//   match1.pointWonBy(randomPoint);

//   // líneas para ver la progresión del juego
//   console.log('\n-------------\nCurrentRoundScore : ', match1.getCurrentRoundScore());
//   console.log('getMatchScore (rounds) : ', match1.getMatchScore());
//   console.log('GameScore (games won) : ', match1.getGameScore());
// }

// console.log(`Winner: ${match2.getWinner()}`);


// // FINAL
// const final = createMatch(match1.getWinner(), match2.getWinner());
// console.log(final);

// while (!final.getWinner()) {
//   const randomPoint = Math.floor(Math.random() * 2) + 1;
//   game.pointWonBy(randomPoint);

//   // líneas para ver la progresión del juego
//   console.log('\n-------------\nCurrentRoundScore : ', final.getCurrentRoundScore());
//   console.log('getMatchScore (rounds) : ', final.getMatchScore());
//   console.log('GameScore (games won) : ', final.getGameScore());
// }

// console.log(`-----------------------`);
// console.log(`FINAL Winner : ${final.getWinner()}, !!!!!! `);
// console.log(`-----------------------`);