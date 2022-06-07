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
    let result = this.data[0]
    //I want to copy over whatever is left from the "length" of what we have to the left.
    for (let i = 0; i < this.length; i++){
      this.data[i] = this.data[i + 1]
    }
    console.log(this.data)
    this.length--
    return result
    //We need to iterate backwards and then reassign values, like in unshift.

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
// newArr.push(1)
// newArr.push('<(@_@<)')
// newArr.push('(>^_^)>')
// console.log(newArr.data)
// newArr.shift()
// console.log(newArr.data)


module.exports = DynamicArray;
