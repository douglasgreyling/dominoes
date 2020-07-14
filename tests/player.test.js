const Player = require("../src/player");
const Domino = require("../src/domino");
const Links = require("../src/links");
const Stock = require("../src/stock");

describe("Player", () => {
  let player;
  let dominoes;
  let links;
  let stock;

  beforeEach(() => {
    dominoes = [new Domino(1, 2), new Domino(2, 3)];
    player = new Player("Alice", dominoes);
  });

  describe("#initialization", () => {
    it("accepts a name and list of dominoes", () => {
      expect(() => new Player("Alice", dominoes)).not.toThrow();
    });
  });

  describe("#addDomino", () => {
    it("adds a domino to the players deck", () => {
      let domino = new Domino(4, 5);
      player.addDomino(domino);

      expect(player.dominoes.length).toBe(3);
      expect(player.dominoes).toEqual(expect.arrayContaining([domino]));
    });
  });

  describe("#dominoes", () => {
    it("returns an array of the players dominoes", () => {
      expect(player.dominoes.toString()).toEqual(dominoes.toString());
    });
  });

  describe("#play", () => {
    describe("when a play can be made", () => {
      it("plays any linkable dominoes in the players deck when possible", () => {
        links = new Links(new Domino(1, 1));
        stock = new Stock([new Domino(6, 6)]);

        player.play(links, stock);

        expect(player.dominoes.length).toBe(1);
        expect(stock.length).toBe(1);
      });

      it("draws from the stock when no linkable dominoes exist", () => {
        links = new Links(new Domino(6, 6));
        stock = new Stock([new Domino(6, 6)]);

        player.play(links, stock);
        player.play(links, stock);

        expect(player.dominoes.length).toBe(2);
        expect(stock.length).toBe(0);
      });
    });

    describe("when no linkable dominoes exist and the stock is empty", () => {
      it("draws and does nothing", () => {
        links = new Links(new Domino(6, 6));
        stock = new Stock([new Domino(1, 1)]);

        player.play(links, stock);

        expect(player.dominoes.length).toBe(3);
        expect(stock.length).toBe(0);
      });
    });
  });
});
