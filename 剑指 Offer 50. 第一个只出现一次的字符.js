/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  let map = new Map()
  for (let i of s) {
    if (!map.get(i)) {
      map.set(i, 1)
    } else {
      map.set(i, map.get(i) + 1)
    }
  }

  for (let i of s) {
    if (map.get(i) === 1) return i
  }
  return ' '
};

console.log(firstUniqChar('abaccdeff'))