const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const blockedList = new Set();

  return matrix.reduce((acc, row) => {
    row.forEach((item, index) => {
      if (!blockedList.has(index)) {
        if (item === 0) {
          blockedList.add(index);
        }

        acc += item;
      }
    });
      
    return acc;
  }, 0)
}

module.exports = {
  getMatrixElementsSum
};
