/* 
Cada 4 rounds gana 1 juego
--------------------------
Player    Games    Rounds
Alberto    0         0
David      0         4

Cuando Rounds===4; mientras ronda !(diff > 1); rondas hasta (diff > 1); max Rondas===7;
--------------------------------------------------------------------------------------
Player    Games    Rounds
Alberto    0         3
David      0         4+1

Cuando Rounds >= 4 & diff > 1; Games = 1;
----------------------------------------
Player    Games    Rounds
Alberto    0         0
David      1         0

el primero que gane 2 --> getWinner(); Output: "David J";
--------------------------------------------------------
Player    Games    Rounds
Alberto    0         0
David      2         0

points
------
0 -> 15 -> 30 -> 40 -> winner Round
if "deuce" -> "adventage" -> winner Round
*/


class Match {
  constructor(player1, player2) {
    this.players = [player1, player2];
    this.scores = [0, 0];
    this.rounds = [0, 0];
    this.games = [0, 0];
    this.advantage = null;
    this.noWinner = true;
    this.MAX_ROUNDS = 7;
  }

  pointWonBy(playerIndex) {

    if (!this.noWinner) {
      console.log("El juego ya ha terminado.");
      return;
    }

    playerIndex--; // respeto el enunciado "1","2" pero uso 0 y 1 para posicion vector.

    // jugador con ventaja gana ronda
    if (this.scores[playerIndex] === 40 && this.scores[1 - playerIndex] === 40 && this.advantage === playerIndex) {
      this.rounds[playerIndex]++;
      this.scores = [0, 0];
      this.advantage = null;
      if (this.rounds[playerIndex] === this.MAX_ROUNDS){
        console.log(`Se han superado las rondas permitidas, sin ganador`);
        this.noWinner = false;
      };
    }
    // jugador gana ventaja
    else if (this.scores[playerIndex] === 40 && this.scores[1 - playerIndex] === 40 && this.advantage === null){
      this.advantage = playerIndex;
    } 
    // jugador gana ronda directa
    else if (this.scores[playerIndex] === 40 && this.scores[1 - playerIndex] < 40){
      this.rounds[playerIndex]++;
      this.scores = [0, 0];
      if (this.rounds[playerIndex] === this.MAX_ROUNDS){
        console.log(`Se han superado las rondas permitidas, sin ganador`);
        this.noWinner = false;
      };
    }
    // el punto ha sido para playerIndex...
    // Comprobar si hay Ventaja para el otro jugador. Volver al Deuce
    else if (this.scores[playerIndex] === 40 && this.scores[1 - playerIndex] === 40 && this.advantage !== playerIndex){
      this.advantage = null; 
    }
    else {
      this.scores[playerIndex] = this.incrementScore(this.scores[playerIndex]);
    }
  
    // Si el jugador ha ganado suficientes rondas con una diferencia suficiente
    if (this.rounds[playerIndex] >= 4 && (this.rounds[playerIndex] - this.rounds[1 - playerIndex]) >= 2) {
      this.games[playerIndex]++;
      this.rounds = [0, 0]; 
      this.scores = [0, 0];
      if (this.games[playerIndex] === 2) {
        console.log(`Match won by: ${this.getWinner()}`);
        this.noWinner = false;
      }
    }
  };

  incrementScore(score) {
    switch (score) {
      case 0:
        return 15;
      case 15:
        return 30;
      case 30:
        return 40; 
      default:
        return score;
    }
  };

  checkGameAndMatchWin(playerIndex) {
    // Si el jugador ha ganado suficientes rondas con una diferencia suficiente
    if (this.rounds[playerIndex] >= 4 && (this.rounds[playerIndex] - this.rounds[1 - playerIndex]) >= 2) {
      this.games[playerIndex]++;
      this.rounds = [0, 0]; // Reiniciar las rondas
      if (this.games[playerIndex] === 2) {
        console.log(`Match won by: ${this.getWinner()}`);
        this.noWinner = false; // Agregar esto si quieres llevar un registro de si hay un ganador o no
      }
    }
  }
  
  
  getCurrentRoundScore() {
    if (this.advantage !== null) {
      return `Advantage ${this.players[this.advantage]}`;
    } else if (this.scores[0] === 40 && this.scores[1] === 40) {
      return "Deuce";
    }
    return `${this.players[0]} ${this.scores[0]}-${this.scores[1]} ${this.players[1]}`;
  };

  getRounds() {
    return this.rounds;
  };  
  
  getGameScore() {
    return `${this.players[0]} ${this.games[0]} ${this.players[1]} ${this.games[1]}`;
  };
  
  getMatchScore() {
    return `${this.players[0]} ${this.rounds[0]} ${this.players[1]} ${this.rounds[1]}`;
  };
  
  getWinner() {
    if (this.games[0] === 2) return this.players[0];
    if (this.games[1] === 2) return this.players[1];
    return null;
  };    
};
  
export function createMatch(player1, player2) {
  return new Match(player1, player2);
};

// export function getPlayers(players) {
//   let players2 = [];
//   for (let i = 0; i < 2; i++) {
//     const randomIndex = Math.floor(Math.random() * players.length);
//     players2.push(players.splice(randomIndex, 1)[0]);
//   }
//   return {players, players2};
// };


// export function playMatch(match) {
//   while (!match.getWinner()) {
//     const randomPoint = Math.floor(Math.random() * 2) + 1;
//     match.pointWonBy(randomPoint);

//     console.log('\n-------------\nCurrentRoundScore : ', match.getCurrentRoundScore());
//     console.log('getMatchScore (rounds) : ', match.getMatchScore());
//     console.log('GameScore (games won) : ', match.getGameScore());
//   }
//   return match.getWinner();
// }

// function getPairs(players) {
//   // Mezclar jugadores y devolver en pares
//   const shuffled = players.sort(() => 0.5 - Math.random());
//   return [shuffled.slice(0, 2), shuffled.slice(2)];
// }
