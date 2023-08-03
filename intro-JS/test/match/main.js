import { createMatch } from './match.js';


let players2 = [];
const players = ['Alberto C', 'David J', 'Javier M', 'Eduardo A'];

for (let i = 0; i < 2; i++) {
  const randomIndex = Math.floor(Math.random() * players.length);
  players2.push(players.splice(randomIndex, 1)[0]);
}

console.log(players2);
console.log(players);


const game = createMatch(players2[0], players2[1]);

while (!game.getWinner()) {
  const randomPoint = Math.floor(Math.random() * 2) + 1;
  game.pointWonBy(randomPoint);

  // líneas para ver la progresión del juego
  console.log('\n-------------\nCurrentRoundScore : ', game.getCurrentRoundScore());
  console.log('getMatchScore (rounds) : ', game.getMatchScore());
  console.log('GameScore (games won) : ', game.getGameScore());

}

console.log(`Winner: ${game.getWinner()}`);




