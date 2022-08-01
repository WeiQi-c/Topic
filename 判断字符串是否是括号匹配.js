/**
 * 一个字符串可能包含{}()[]
 * 判断字符串是否是括号匹配
 * 
 * (a{b}c) 匹配
 * (a{b 不匹配
 */

function judgeIs(s) {
  if (s.length === 0) return true
  let myMap = new Map()
  myMap.set('(', ')')
  myMap.set('{', '}')
  myMap.set('[', ']')
  let i = 0, stock = []
  let arr = [')', ']', '}']
  while (i < s.length) {
    if (!arr.includes(s[i])) {
      i++
    } else if (myMap.has(s[i])) {
      stock.push(s[i])
      i++
    } else {
      let res = stock.pop()
      if (myMap.get(res) === s[i]) {
        i++
      } else {
        return false
      }
    }
  }
  return stock.length === 0

}

const res = judgeIs('a(a])[]')
console.log(res)