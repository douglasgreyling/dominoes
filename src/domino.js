class Domino {
  constructor(pipsA, pipsB) {
    this.pipsA = pipsA;
    this.pipsB = pipsB;
  }

  rotate = () => {
    [this.pipsB, this.pipsA] = this.pips;
    return this;
  };

  get pips() {
    return [this.pipsA, this.pipsB];
  }

  canLink = (domino) => this.pipsB === domino.pipsA;
}

Domino.prototype.toString = function () {
  return `<${this.pipsA}:${this.pipsB}>`;
};

module.exports = Domino;
