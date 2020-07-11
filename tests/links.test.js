const Links = require("../src/links");
const Domino = require("../src/domino");

describe("Links", () => {
  let links;

  beforeEach(() => {
    links = new Links(new Domino(1, 2));
  });

  describe("initialization", () => {
    it("accepts a domino as the first link", () => {
      expect(links.length).toBe(1);
    });
  });

  describe("#all", () => {
    it("returns all of the domino links", () => {
      links.link(new Domino(2, 3));

      expect(links.all().length).toBe(2);
      expect(links.all().toString()).toBe("<1:2>,<2:3>");
    });
  });

  describe("#link", () => {
    it("links a given domino to the left link where possible", () => {
      links.link(new Domino(2, 1));

      expect(links.all().length).toBe(2);
      expect(links.all().toString()).toBe("<2:1>,<1:2>");
    });

    it("links a given domino to the left link after a rotation where possible", () => {
      links.link(new Domino(1, 2));

      expect(links.all().length).toBe(2);
      expect(links.all().toString()).toBe("<2:1>,<1:2>");
    });

    it("links a given domino to the right link where possible", () => {
      links.link(new Domino(2, 3));

      expect(links.all().length).toBe(2);
      expect(links.all().toString()).toBe("<1:2>,<2:3>");
    });

    it("links a given domino to the right link after a rotation where possible", () => {
      links.link(new Domino(3, 2));

      expect(links.all().length).toBe(2);
      expect(links.all().toString()).toBe("<1:2>,<2:3>");
    });

    it("returns the link outcome when a link is made", () => {
      let domino = new Domino(2, 1);
      let linkDomino = links.all()[0];
      let result = links.link(domino);

      expect(result).toEqual({ domino: domino, linkedTo: linkDomino });
    });

    it("returns undefined when no link is made", () => {
      let result = links.link(new Domino(6, 6));

      expect(result).toBeUndefined();
    });
  });

  describe("#length", () => {
    it("returns the number of links", () => {
      expect(links.length).toBe(1);
    });
  });
});
