const DeckStockDominoIterator = require("../src/deck-stock-domino-iterator");

class player {
  constructor(name, dominoes = []) {
    this.name = name;
    this._dominoes = dominoes;
    this.canPlay = true;
  }

  addDomino = (domino) => {
    this.dominoes = this.dominoes.concat(domino);
  };

  get dominoes() {
    return [...this._dominoes];
  }

  set dominoes(dominoes) {
    this._dominoes = dominoes;
  }

  play = (links, stock) => {
    let deckStockDominoIterator = new DeckStockDominoIterator(this, stock);
    let linkResult;
    let dominoIteration;

    do {
      dominoIteration = deckStockDominoIterator.next();

      if (!dominoIteration.value) break;

      if (dominoIteration.source === "stock") {
        this.addDomino(dominoIteration.value);
        this._logDraw(dominoIteration.value);
      }

      linkResult = links.link(dominoIteration.value);

      if (linkResult) this.canPlay = true;
    } while (!linkResult);

    if (linkResult) {
      this._removeLinkedDominoFromDeck(linkResult.domino);
      this._logPlay(linkResult);
    } else {
      this.canPlay = false;
      this._logTurnSkip();
    }
  };

  _logDraw = (domino) => {
    console.log(`${this.name} can't play, drawing tile ${domino}`);
  };

  _logPlay = (linkResult) => {
    console.log(
      `${this.name} plays ${linkResult.domino} to connect to tile ${linkResult.linkedTo} on the board`
    );
  };

  _logTurnSkip = () => {
    console.log(`${this.name} has no dominoes to link and skips their turn!`);
  };

  _removeLinkedDominoFromDeck = (domino) => {
    this.dominoes = this.dominoes.filter((d) => d !== domino);
  };
}

module.exports = player;
