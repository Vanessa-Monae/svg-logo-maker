const {Triangle, Square, Circle } = require("./shapes");

describe("Square SVG", () => {
    test("should create svg for a blue polygon element", () => {
      const expectedSvg =
        '<rect x="90" y="40" width="120" height="120" fill="blue" />';
      const square = new Square();
      square.setShapeColor("blue");
      const actualSvg = square.render();
      expect(actualSvg).toEqual(expectedSvg);
    });
});