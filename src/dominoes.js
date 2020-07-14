const Links = require("./links");

class Dominoes {
  constructor(players, stock) {
    this.players = players;
    this.stock = stock;

    this._turn = 0;
    this._links = new Links(this.stock.draw());
    this._deal();
  }

  play = () => {
    console.log("Game starting with first tile:", this.links.toString());
    let currentPlayer;

    while (true) {
      currentPlayer = this._fetchCurrentPlayer();
      currentPlayer.play(this.links, this.stock);

      console.log("Board is now:", this.links.toString());

      if (this._isWinner(currentPlayer) || this._noOneCanPlay()) break;
      else this.turn += 1;
    }

    return this._logOutcome();
  };

  get links() {
    return this._links;
  }

  get turn() {
    return this._turn;
  }

  set turn(number) {
    this._turn = number;
  }

  _deal = () => {
    for (let i = 0; i < this._playerDeckSize() && this.stock.length; i++) {
      this.players.forEach((player) => player.addDomino(this.stock.draw()));
    }
  };

  _playerDeckSize = () => 7;

  _fetchCurrentPlayer = () => this.players[this.turn % this.players.length];

  _isWinner = (player) => !player.dominoes.length;

  _noOneCanPlay = () => this.players.every((p) => !p.canPlay);

  _logOutcome = () => {
    if (this._isWinner(this._fetchCurrentPlayer())) {
      console.log(`Player ${this._fetchCurrentPlayer().name} has won!`);
      return true;
    } else {
      console.log("Stalemate. No body won!");
      return false;
    }
  };
}

module.exports = Dominoes;
