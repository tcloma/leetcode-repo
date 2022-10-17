/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (s) => {
  return s.toString() === s.toString().split('').reverse().join('')
}