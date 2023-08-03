import { createMatch, getPlayers, playMatch } from './match.js';



const options = ['Alberto C', 'David J', 'Javier M', 'Eduardo A'];

// Obtener los primeros dos jugadores aleatorios
const { players, players2 } = getPlayers(options);

console.log(players2);
console.log(players);


// Crear los partidos utilizando los jugadores seleccionados y los jugadores restantes
const game1 = createMatch(players2[0], players2[1]);
const game2 = createMatch(players[0], players[1]);

let winner1 = playMatch(game1);
console.log(`Winner 1 : ${winner1}`);

let winner2 = playMatch(game2);
console.log(`Winner 2 : ${winner2}`);


// FINAL
const final = createMatch(winner1, winner2);

const finalWinner = playMatch(final);
console.log(`-----------------------`);
console.log(`FINAL Winner: ${finalWinner}, !!!!!! `);
console.log(`-----------------------`);

// while (!game1.getWinner()) {
//   const randomPoint = Math.floor(Math.random() * 2) + 1;
//   game1.pointWonBy(randomPoint);

//   // líneas para ver la progresión del juego
//   console.log('\n-------------\nCurrentRoundScore : ', game1.getCurrentRoundScore());
//   console.log('getMatchScore (rounds) : ', game1.getMatchScore());
//   console.log('GameScore (games won) : ', game1.getGameScore());

// }

// console.log(`Winner: ${game1.getWinner()}`);




