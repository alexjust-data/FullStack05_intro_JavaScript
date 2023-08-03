import { createMatch, getPlayers, playMatch } from './match.js';



// Jugadores
const options = ['Alberto C', 'David J', 'Javier M', 'Eduardo A'];



// Obtener jugadores aleatorios
const { players, players2 } = getPlayers(options);
console.log(players2);
console.log(players);



// SEMI FINALES
const game1 = createMatch(players2[0], players2[1]);
const game2 = createMatch(players[0], players[1]);

let winner1 = playMatch(game1);
console.log(`Winner semifinal 1 : ${winner1}`);

let winner2 = playMatch(game2);
console.log(`Winner semifianl 2 : ${winner2}`);



// FINAL
const final = createMatch(winner1, winner2);

const finalWinner = playMatch(final);
console.log(`-----------------------`);
console.log(`FINAL Winner: ${finalWinner}, !!!!!! `);
console.log(`-----------------------`);






