const Domino = require("../src/domino");
const Player = require("../src/player");
const Stock = require("../src/stock");
const DeckStockDominoIterator = require("../src/deck-stock-domino-iterator");

describe("DeckStockDominoIterator", () => {
  let playerDeckDomino = new Domino(1, 1);
  let stockDomino = new Domino(6, 6);
  let deckStockDominoIterator;
  let dominoIteration;
  let player;
  let stock;

  beforeEach(() => {
    player = new Player("Alice", [playerDeckDomino]);
    stock = new Stock([stockDomino]);
    deckStockDominoIterator = new DeckStockDominoIterator(player, stock);
  });

  describe("initialization", () => {
    it("accepts a player and a stock as arguments", () => {
      expect(() => new DeckStockDominoIterator(player, stock));
    });
  });

  describe("#next", () => {
    it("returns one domino from the players deck", () => {
      dominoIteration = deckStockDominoIterator.next();

      expect(stock.dominoes.length).toBe(1);
      expect(dominoIteration).toEqual({
        value: playerDeckDomino,
        done: false,
        source: "deck",
      });
    });

    describe("when all dominoes in the players deck have been interated over", () => {
      it("draws and returns dominoes from the stock", () => {
        deckStockDominoIterator.next();
        dominoIteration = deckStockDominoIterator.next();

        expect(stock.dominoes.length).toBe(0);
        expect(dominoIteration).toEqual({
          value: stockDomino,
          done: true,
          source: "stock",
        });
      });
    });
  });
});
