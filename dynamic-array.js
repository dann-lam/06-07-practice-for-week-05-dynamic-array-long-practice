class DynamicArray {
  constructor(defaultSize = 4) {
    this.length = 0;
    this.capacity = defaultSize;
    this.data = new Array(defaultSize);
  }

  read(index) {
    if (index >= this.length) return undefined;
    return this.data[index];
  }

  push(val) {
    //How do I get to the 'end' of the array?
    this.data[this.length] = val;
    this.length++;
  }

  pop() {
    let result = this.data[this.length - 1];
    this.data[this.length - 1] = undefined;
    this.length--;
    //Need edge case for length
    return result;
  }

  shift() {
    let result = this.data[0];
    //I want to copy over whatever is left from the "length" of what we have to the left.
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    console.log(this.data);
    this.length--;
    return result;
    //We need to iterate backwards and then reassign values, like in unshift.
  }

  unshift(val) {
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = val;
    this.length++;
  }

  indexOf(val) {
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === val) {
        console.log(i);
        return i;
      }
    }
    return -1;
  }
  //Ask him about pop as well, when I assign somethjing to undefined.

  resize() {
    //When I resize, I'm taking the capacity, and then *2ing it.
    this.capacity = this.capacity * 2;
    //Then we create a NEW array by calling this.newArr = new Array(this.capacity)

    //We loop through the old array
    //We set the old array's [i] to the new array's [i]

    this.newArr = new Array(this.capacity);
    //I want to copy over the stuff from this.data to the new array.

    //I know when to stop by using the length.

    this.data = this.newArr;
    //It has to automatically resize too...
    //Needs a condition....
    //
  }
}

const oldArr = new DynamicArray();
oldArr.push(1);
oldArr.push(2);
oldArr.push(3);

module.exports = DynamicArray;
