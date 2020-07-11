class DeckStockDominoIterator {
  constructor(player, stock) {
    this.player = player;
    this.dominoesIterator = player.dominoes[Symbol.iterator]();
    this.stock = stock;
  }

  next() {
    let item = this._getDeckDomino();

    if (item.done && this.stock.length) {
      item = this._getStockDomino();
    }

    return item;
  }

  _getDeckDomino = () => {
    let domino = this.dominoesIterator.next();
    domino.source = "deck";

    return domino;
  };

  _getStockDomino = () => {
    return {
      value: this.stock.draw(),
      source: "stock",
      done: !this.stock.length,
    };
  };
}

module.exports = DeckStockDominoIterator;
