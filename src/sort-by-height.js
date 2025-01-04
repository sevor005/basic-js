const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let result = [];
  let indexNum = 0;

  const notSubNumbers = arr.filter(item => item !== -1).sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      result = [...result, arr[i]]
    } else {
      result = [...result, notSubNumbers[indexNum]]
      indexNum++;
    }
  }

  return result;
}

module.exports = {
  sortByHeight
};
