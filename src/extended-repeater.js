const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|',
  } = options;

  let result = '';


  for (let i = 0; i < repeatTimes; i++) {
    result += str;

    for (let j = 0; j < additionRepeatTimes; j++) {
      result += `${addition}${(j === additionRepeatTimes - 1) ? '' : additionSeparator}`;
    }

    result += (i === repeatTimes - 1) ? '' : separator;
  }

  return result;
}

module.exports = {
  repeater
};
