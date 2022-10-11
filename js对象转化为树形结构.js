// 转换前：
source = [{
  id: 1,
  pid: 0,
  name: 'body'
}, {
  id: 2,
  pid: 1,
  name: 'title'
}, {
  id: 3,
  pid: 2,
  name: 'div'
}]
// 转换为: 
tree = [{
  id: 1,
  pid: 0,
  name: 'body',
  children: [{
    id: 2,
    pid: 1,
    name: 'title',
    children: [{
      id: 3,
      pid: 1,
      name: 'div'
    }]
  }]
}]

function transform(data) {
  let map = {}, result = []
  data.map(item => map[item.id] = item)

  data.forEach(item => {
    let parent = map[item.pid] // 当前元素的父级
    if (parent) {
      if (parent.children) {
        parent.children.push(item)
      } else {
        parent.children = [item]
      }
    } else { // 不存在
      result.push(item)
    }
  })
  return result
}

console.log(transform(source))
