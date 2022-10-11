const array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

Array.from(new Set(array))  // [1, 2, 3, 5, 9, 8]

function uniqueArray(array) {
  let map = {}
  let res = []
  array.forEach(element => {
    if (!map.hasOwnProperty(element)) {
      map[element] = 1
      res.push(element)
    }
  })
  return res
}

console.log(uniqueArray(array))
