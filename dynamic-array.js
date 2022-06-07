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
    let result =  this.data[this.length - 1]
    console.log(result)
    this.data[this.length - 1] = undefined
    this.length--
    return result
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

// const newArr = new DynamicArray
// console.log(newArr.length)
// console.log(newArr.unshift(1))
// console.log(newArr.unshift('hi'))
// console.log(newArr.unshift('lol'))
// console.log(newArr.unshift('@_@'))
// console.log(newArr.data)
// console.log(newArr.unshift('!!'))
// console.log(newArr.data)
// console.log(newArr.capacity)


module.exports = DynamicArray;
