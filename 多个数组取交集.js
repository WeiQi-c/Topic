const getIntersection = (...arrs) => {
  console.log(arrs)
  const a = arrs.reduce((pre, cur) => {
    console.log(cur, 'aaa')
    return cur.filter(item => pre.includes(item))
  })
  return Array.from(new Set(a))
}

console.log(getIntersection([1, 2, 3, 2], [2, 5, 2, 3], [2, 2, 3, 5]))
