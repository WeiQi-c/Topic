function flat_reduce(arr) {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flat(cur) : cur)
  }, [])
}


function flat_stack(arr) {
  const result = []
  const stack = [].concat(arr) // 讲数组元素拷贝入栈中
  // 如果栈不为空，则循环遍历
  while (stack.length !== 0) {
    const val = stack.pop()
    if (Array.isArray(val)) {
      stack.push(...val)
    } else {
      result.push(val)
    }
  }
  return result
}


// reduce + 递归
function flat(arr, num = 1) {
  return num > 0
    ? arr.reduce((pre, cur) => pre.concat(Array.isArray(cur) ? flat(cur, num - 1) : cur),[])
    : arr.slice()
}

const arr = [1, 2, 3, [4, 5, ['j', 'k'], 6], [7]]
console.log(flat(arr, Infinity))