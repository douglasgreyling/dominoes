const Stock = require("./src/stock");
const { dominoFactory } = require("./src/factories/dominoes");
const Dominoes = require("./src/dominoes");
const Player = require("./src/player");

let stock = new Stock(dominoFactory(6));

dominoes = new Dominoes([new Player("Alice"), new Player("Bob")], stock);

dominoes.play();
