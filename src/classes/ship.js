class ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
  }

  hit() {
    if (this.isSunk()) return;
    this.hits++;
  }

  isSunk() {
    return this.hits === this.length;
  }
}

module.exports = ship;
