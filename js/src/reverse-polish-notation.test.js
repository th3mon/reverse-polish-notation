import { reversePolishNotation } from "./reverse-polish-notation";

describe("Reverse Polish Notation", () => {
  it("Should exist", () => {
    expect(reversePolishNotation).toBeDefined();
  });

  describe("simple use cases", () => {
    it("Should add numbers", () => {
      expect(reversePolishNotation("1 2 +")).toEqual(3);
    });

    it("Should substract numbers", () => {
      expect(reversePolishNotation("2 1 -")).toEqual(-1);
    });

    it("Should multiply numbers", () => {
      expect(reversePolishNotation("2 3 *")).toEqual(6);
    });

    it("Should divide numbers", () => {
      expect(reversePolishNotation("2 3 /")).toEqual(1.5);
    });

    it("Should reverse polish notation", () => {
      expect(reversePolishNotation("2 3 ^")).toEqual(9);
    });
  });

  describe("combo use cases", () => {
    it("Should add and substract numbers", () => {
      expect(reversePolishNotation("7 1 1 + -")).toEqual(-5);
    });

    it("Should handle more complicated use case", () => {
      expect(reversePolishNotation("15 7 1 1 + - / 3 * 2 1 1 + + -")).toEqual(
        5
      );
    });
  });

  describe("plugins", () => {
    it("Should execute modulo", () => {
      const modulo = (a, b) => Number(a) % Number(b);

      expect(
        reversePolishNotation("2 2 %", {
          operations: {
            "%": modulo,
          },
        })
      ).toEqual(0);
    });
  });
});
