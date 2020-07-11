const Domino = require("../src/domino");

describe("Domino", () => {
  let domino;

  beforeEach(() => {
    domino = new Domino(1, 2);
  });

  describe("initialization", () => {
    it("accepts two numbers as the domino pips", () => {
      expect(() => new Domino(1, 2)).not.toThrow();
    });

    it("sets the first argument as pipA", () => {
      expect(domino.pipsA).toEqual(1);
    });

    it("sets the second argument as pipB", () => {
      expect(domino.pipsB).toEqual(2);
    });
  });

  describe("#rotate", () => {
    it("rotates the order of the pips", () => {
      domino.rotate();

      expect(domino.pips).toEqual([2, 1]);
    });
  });

  describe("#pips", () => {
    it("returns the pips of the domino as an array", () => {
      expect(domino.pips).toEqual([1, 2]);
    });
  });

  describe("#canLink", () => {
    it("returns true when a domino can be linked with another domino", () => {
      expect(domino.canLink(new Domino(2, 1))).toBeTruthy;
    });

    it("returns true when a domino can be linked with another domino", () => {
      expect(domino.canLink(new Domino(1, 2))).toBeTruthy;
    });
  });
});
