const { generateLogo } = require("./lib/logoGenerator");

generateLogo().then(() => {
  console.log("Generated logo.svg");
});
