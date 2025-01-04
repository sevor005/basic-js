const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  if (n < 10) return n;

  let res = 1;
  const str = n.toString();

  for (let i = 0; i < str.length; i++ ) {
    const num = parseInt(str.slice(0, i) + str.slice(i + 1));

    res = Math.max(res, num);
  }

  return res;
}

module.exports = {
  deleteDigit
};
