const Shape = require('./Shape');

class Square extends Shape {
  render() {
    const x = 56;
    const y = 18;
    const width = 188;
    const height = 164;
    return `<rect x="${x}" y="${y}" width="${width}" height="${height}" fill="${this.color}" />`;
  }
}


module.exports = Square;