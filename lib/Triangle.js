const Shape = require('./Shape');

class Triangle extends Shape {
  
  render() {
    const points = "150,18 244,182 56,182";
    return `<polygon points="${points}" fill="${this.color}" />`;
  }
}

module.exports = Triangle;
