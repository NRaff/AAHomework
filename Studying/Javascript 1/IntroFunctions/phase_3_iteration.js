// [1,5,3,8,2,9,7,4,6]
Array.prototype.bubbleSort = function () {
  let sorted = false;
  let counter = 0;
  while (!sorted) {
    sorted = true;
    for (let i=0; i<this.length-1; i++) {
      if (this[i] >= this[i+1]) {
        let greater = this[i];
        let lesser = this[i+1];
        this[i+1] = greater;
        this[i] = lesser;
        sorted = false;
      }
    }
    console.log(counter++)
  }
}
arr = [1, 5, 3, 8, 2, 9, 7, 4, 6];
// arr.bubbleSort()
// console.log(arr)

String.prototype.substrings = function () {
  allSubstrings = [];
  for (let i=0; i<=this.length; i++) {
    // allSubstrings.push(this[i]);
    for (let x=i+1; x<=this.length; x++) {
      let sub = this.slice(i, x);
      if (!allSubstrings.includes(sub)) {
        allSubstrings.push(this.slice(i, x));
      }
    }
  }
  return allSubstrings
}

// console.log("hello".substrings())