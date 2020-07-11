const Stock = require("../src/stock");
const Domino = require("../src/domino");

describe("Stock", () => {
  describe("initialization", () => {
    it("accepts dominoes", () => {
      expect(
        () => new Stock([new Domino(1, 2), new Domino(3, 4), new Domino(5, 6)])
      ).not.toThrow();
    });

    it("shuffles the dominoes", () => {
      let originalDominoes = [
        new Domino(1, 2),
        new Domino(3, 4),
        new Domino(5, 6),
      ];

      let stock = new Stock(originalDominoes);

      expect(originalDominoes.toString()).not.toEqual(
        stock.dominoes.toString()
      );
    });
  });

  describe("#draw", () => {
    it("removes and returns a domino", () => {
      let dominoes = [new Domino(1, 2), new Domino(3, 4), new Domino(5, 6)];
      let stock = new Stock(dominoes);

      expect(stock.draw().__proto__.constructor.name).toEqual("Domino");
      expect(stock.length).toBe(2);
    });
  });

  describe("#length", () => {
    it("returns the number of dominoes", () => {
      let dominoes = [new Domino(1, 2), new Domino(3, 4), new Domino(5, 6)];
      let stock = new Stock(dominoes);

      expect(stock.length).toEqual(3);
    });
  });
});
