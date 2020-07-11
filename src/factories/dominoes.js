const Domino = require("../domino");

function dominoFactory(doubleSet = 0) {
  let dominoes = [];

  for (let i = 0; i <= doubleSet; i++) {
    dominoes = dominoes.concat(createSuitDominoes(i, doubleSet));
  }

  return dominoes;
}

function createSuitDominoes(suit, doubleSet) {
  let dominoesSuit = [];

  for (let j = suit; j <= doubleSet; j++) {
    dominoesSuit.push(new Domino(suit, j));
  }

  return dominoesSuit;
}

module.exports = { dominoFactory };
