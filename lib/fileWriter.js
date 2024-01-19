const fs = require("fs");

const writeToFile = (filename, content) => {
  fs.writeFileSync(filename, content);
};

module.exports = { writeToFile };
