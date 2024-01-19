const { getUserInput } = require("./userInput");
const { writeToFile } = require("./fileWriter");
const Triangle = require("./Triangle");
const Circle = require("./Circle");
const Square = require("./Square");

const generateLogo = async () => {
  const userInput = await getUserInput();

  let shape;
  switch (userInput.shape) {
    case "circle":
      shape = new Circle();
      break;
    case "triangle":
      shape = new Triangle();
      break;
    case "square":
      shape = new Square();
      break;
    default:
      throw new Error("Invalid shape");
  }

  shape.setColor(userInput.shapeColor);

  const svgContent = `<?xml version="1.0" encoding="utf-8"?>
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        ${shape.render()}
        <text x="150" y="100" fill="${
          userInput.textColor
        }" text-anchor="middle" dominant-baseline="middle" font-size="40">${
    userInput.text
  }</text>
</svg>`;

  writeToFile("logo.svg", svgContent);
};

module.exports = { generateLogo };
