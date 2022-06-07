class DynamicArray {

  constructor(defaultSize=4) {

    this.length = 0;
    this.capacity = defaultSize
    this.data = new Array(defaultSize)
  }

  read(index) {
    if (index >= this.length) return undefined;
    return this.data[index]
  }

  push(val) {
    //How do I get to the 'end' of the array?
    this.data[this.length] = val
    this.length++;
   }


  pop() {

    // Your code here
  }

  shift() {

    // Your code here
  }

  unshift(val) {
    for (let i = this.length; i > 0; i--){
      this.data[i] = this.data[i - 1]
    }
    this.data[0] = val;
    this.length++;
  }

  indexOf (val) {

    // Your code here
  }

  resize () {
    //
    // Your code here
  }

}

const newArr = new DynamicArray
newArr.capacity = 4
newArr.length = 0
console.log(newArr.data)
newArr.unshift('lalala')
console.log(newArr.data)
console.log(newArr.length)
newArr.push('lulululu')
console.log(newArr.data)
console.log(newArr.length)
console.log(newArr.data.length[newArr.length])

module.exports = DynamicArray;
