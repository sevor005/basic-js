const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  list: [],

  getLength() {
    return this.list.length;
  },
  addLink(value) {
    this.list = [...this.list, value !== '' ? `${String(value)}` : '( )'];

    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || position % 1 !== 0 || position < 1 || position > this.getLength()) {
      this.list = [];

      throw new Error("You can't remove incorrect link!");
    }

    this.list = this.list.filter((_, index) => index !== position - 1);

    return this;
  },
  reverseChain() {
    this.list.reverse();

    return this;
  },
  finishChain() {
    const result = this.list.map(item => `( ${item} )`).join('~~');

    this.list = [];

    return result;
  }
};

module.exports = {
  chainMaker
};
