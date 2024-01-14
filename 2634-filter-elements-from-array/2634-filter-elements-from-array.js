/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

var filter = function (arr, fn) {
  const answer = [];
  arr.forEach((item, idx) => fn(item, idx) && answer.push(item));
  return answer;
};