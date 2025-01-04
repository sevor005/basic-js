const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const checkS1 = [...s1].reduce((acc, item) => {
    acc[item] = acc[item] ? acc[item] + 1 : 1;

    return acc;
  }, {});

  const checkS2 = [...s2].reduce((acc, item) => {
    acc[item] = acc[item] ? acc[item] + 1 : 1;

    return acc;
  }, {});


  const result = Object.keys(checkS1)
    .map(item => checkS2[item] ? Math.min(checkS1[item], checkS2[item]) : 0)
    .reduce((acc, item) => acc + item, 0);

  return result;
}

module.exports = {
  getCommonCharacterCount
};
