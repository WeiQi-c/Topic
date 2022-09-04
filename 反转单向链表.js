// 根据数组 创建一个单向链表结构
function createLinkList(arr) {
  const len = arr.length
  if (len === 0) throw new Error('arr is empty')

  let curNode = {
    value: arr[len - 1]
  }
  if (len === 1) return curNode

  for (let i = len - 2; i >= 0; i--) {
    curNode = {
      value: arr[i],
      next: curNode
    }
  }
  return curNode
}
let linkList = createLinkList([1, 2, 3])
console.log("linkList：", linkList)


function reverseList(head) {
  let preNode = undefined
  let curNode = undefined
  let nextNode = head

  while (nextNode) {
    // 第一个元素，删掉next，防止循环引用
    if (curNode && !preNode) {
      delete curNode.next
    }
    // 反转指针
    if (curNode && preNode) {
      curNode.next = preNode
    }
    // 整体向后移动
    preNode = curNode
    curNode = nextNode
    nextNode = nextNode.next
  }
  curNode.next = preNode
  return curNode
};

console.log("reverseLinkList：",reverseList(linkList))