const Player = require("../src/player");
const Dominoes = require("../src/dominoes");
const Stock = require("../src/stock");
const { dominoFactory } = require("../src/factories/dominoes");

const Links = require("../src/links");
const Domino = require("../src/domino");

describe("Dominoes", () => {
  let players;
  let dominoes;

  beforeEach(() => {
    players = [new Player("Alice"), new Player("Bob")];
    dominoes = new Dominoes(players, new Stock(dominoFactory(6)));
  });

  describe("initialization", () => {
    it("accepts an array of players and a stock", () => {
      expect(
        () => new Dominoes(players, new Stock(dominoFactory(2)))
      ).not.toThrow();
    });

    it("deals 7 dominoes to each player", () => {
      expect(dominoes.players[0].dominoes.length).toBe(7);
      expect(dominoes.players[1].dominoes.length).toBe(7);
    });
  });

  describe("#play", () => {
    it("initiates and finishes a game of dominoes", () => {
      expect(() => dominoes.play()).not.toThrow();
    });
  });

  describe("#links", () => {
    it("returns the current links in the dominoes game", () => {
      let stock = new Stock(dominoFactory(2));
      let expectedList = stock.dominoes[0];
      dominoes = new Dominoes(players, stock);

      expect(dominoes.links.toString()).toEqual(expectedList.toString());
    });
  });

  describe("#turn", () => {
    it("returns the current turn", () => {
      expect(dominoes.turn).toBe(0);
    });
  });
});
