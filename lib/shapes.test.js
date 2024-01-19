const Circle = require("./Circle");
const Square = require("./Square");
const Triangle = require("./Triangle");

test("Circle render method should return correct SVG string", () => {
  const shape = new Circle();
  shape.setColor("blue");
  expect(shape.render()).toEqual(
    '<circle cx="150" cy="100" r="75" fill="blue" />'
  );
});

test("Square render method should return correct SVG string", () => {
  const shape = new Square();
  shape.setColor("red");
  expect(shape.render()).toEqual(
    '<rect x="56" y="18" width="188" height="164" fill="red" />'
  );
});

test("Triangle render method should return correct SVG string", () => {
  const shape = new Triangle();
  shape.setColor("green");
  expect(shape.render()).toEqual(
    '<polygon points="150,18 244,182 56,182" fill="green" />'
  );
});
