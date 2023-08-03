function createMatch(player1, player2) {
    const game = {
      players: [player1, player2],
      rounds: [0, 0],
      games: [0, 0],
      currentScores: [0, 0],
      deuce: false,
      advantage: null,
      getCurrentRoundScore: function() {
        if (this.deuce) return "Deuce";
        if (this.advantage !== null) return `Advantage ${this.players[this.advantage]}`;
        return `${this.players[0]} ${scoreToString(this.currentScores[0])}-${scoreToString(this.currentScores[1])} ${this.players[1]}`;
      },
      getGameScore: function() {
        return `${this.players[0]} ${this.rounds[0]}\n${this.players[1]} ${this.rounds[1]}`;
      },
      getMatchScore: function() {
        return `${this.players[0]} ${this.games[0]}\n${this.players[1]} ${this.games[1]}`;
      },
      getWinner: function() {
        if (this.games[0] === 2) return this.players[0];
        if (this.games[1] === 2) return this.players[1];
        return null;
      },
      pointWonBy: function(playerIndex) {
        playerIndex--; // Reduce by one to match array index
        if (this.deuce) {
          if (this.advantage === null) {
            this.advantage = playerIndex;
          } else if (this.advantage === playerIndex) {
            this.rounds[playerIndex]++;
            this.resetRound();
          } else {
            this.advantage = null;
          }
          return;
        }
        if (this.currentScores[playerIndex] === 40 && this.currentScores[1 - playerIndex] < 40) {
          this.rounds[playerIndex]++;
          this.resetRound();
          return;
        }
        this.currentScores[playerIndex] = nextScore(this.currentScores[playerIndex]);
        if (this.currentScores[0] === 40 && this.currentScores[1] === 40) {
          this.deuce = true;
          this.currentScores = [0, 0];
        }
        if (this.rounds[playerIndex] === 4) {
          this.games[playerIndex]++;
          this.rounds = [0, 0];
          if (this.games[playerIndex] === 2) {
            console.log(`Match won by ${this.players[playerIndex]}`);
          }
        }
      },
      resetRound: function() {
        this.currentScores = [0, 0];
        this.deuce = false;
        this.advantage = null;
      }
    };
    return game;
  }
  
  function scoreToString(score) {
    switch (score) {
      case 0:
        return "0";
      case 15:
        return "15";
      case 30:
        return "30";
      case 40:
        return "40";
      default:
        return "Error";
    }
  }
  
  function nextScore(score) {
    switch (score) {
      case 0:
        return 15;
      case 15:
        return 30;
      case 30:
        return 40;
      default:
        return "Error";
    }
  }
  
// Example usage:
const game = createMatch('Alberto C', 'David J');
game.pointWonBy(1);
console.log(game.getCurrentRoundScore());
  