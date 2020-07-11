class Stock {
  constructor(dominoes) {
    this.dominoes = this._shuffle(dominoes);
  }

  draw = () => this.dominoes.shift();

  get length() {
    return this.dominoes.length;
  }

  _shuffle = (dominoes) => {
    let shuffledDominoes;

    do shuffledDominoes = [...dominoes].sort(() => Math.random() - 0.5);
    while (
      1 < shuffledDominoes.length &&
      shuffledDominoes.toString() == dominoes.toString()
    );

    return shuffledDominoes;
  };
}

Stock.prototype.toString = function () {
  return this.dominoes.toString();
};

module.exports = Stock;
