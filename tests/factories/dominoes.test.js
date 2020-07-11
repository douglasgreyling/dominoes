const { dominoFactory } = require("../../src/factories/dominoes");

describe("dominoFactory", () => {
  it("returns a set of dominoes given a double set", () => {
    expect(dominoFactory(6).length).toEqual(28);
  });

  it("creates a member domino for each suit", () => {
    let dominoes = dominoFactory(6);

    for (let i = 0; i <= 6; i++) {
      for (let j = i; j <= 6; j++) {
        expect(dominoes.find((d) => d.pips === [i, j])).toBeTruthy;
      }
    }
  });
});
