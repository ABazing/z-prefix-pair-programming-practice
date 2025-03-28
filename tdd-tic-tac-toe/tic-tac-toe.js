class TicTacToeGame {
  constructor() {
    this.players = [];
    this.symbols = [];
    this.gameBoard;
  }

  gameBoardStatus(){
    if(!this.gameBoard){
      return 'The board is empty';
    }
  }

  addPlayer(player, symbol){
    if(this.players.length == 2){
      return 'Maximum number of players exceeded.';
    }
    this.players.push({player: player, symbol: symbol});
  }

  getPlayers(){
    return this.players.map(p => p.player);
  }

  getPlayerSymbols(){
    return this.players;
  }
}

module.exports = TicTacToeGame