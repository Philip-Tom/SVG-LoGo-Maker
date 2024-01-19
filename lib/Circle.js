const Shape = require('./Shape');

class Circle extends Shape {
  
  render() {
    const cx = 150;
    const cy = 100;
    const r = 75;
    return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${this.color}" />`;
  }
}


module.exports = Circle;