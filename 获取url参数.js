// 创建一个URLSearchParams实例
// window.location.search 获取 ? 之后的内容
// const urlSearchParams = new URLSearchParams(window.location.search);
// 把键值对列表转换为一个对象
// const params = Object.fromEntries(urlSearchParams.entries());


function getParams(url) {
  const res = {}
  if (url.includes('?')) {
    const str = url.split('?')[1]
    const arr = str.split('&')
    arr.forEach(item => {
      const key = item.split('=')[0]
      const val = item.split('=')[1]
      res[key] = decodeURIComponent(val) // 解码
    })
  }
  return res
}

// 测试
const user = getParams('http://www.baidu.com?user=%E9%98%BF%E9%A3%9E&age=16')
console.log(user) // { user: '阿飞', age: '16' }