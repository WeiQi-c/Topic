function instanceOf(left, right) {
  // let proto = left.__proto__
  let proto = Object.getPrototypeOf(left)
  while (true) {
    if (proto === null) return false
    if (proto === right.prototype) {
      return true
    }
    // proto = proto.__proto__
    proto = Object.getPrototypeOf(proto)

  }
}  

function a() { } 
function a1() { }


const s1 = new a()

console.log(instanceOf(s1, a1))