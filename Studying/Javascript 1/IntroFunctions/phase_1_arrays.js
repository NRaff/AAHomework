Array.prototype.uniq = function () {
  let newArr = [];
  for (i=0; i< this.length; i++) {
    newArr.includes(this[i]) ? '' : newArr.push(this[i]);
  }
  return newArr;
}

Array.prototype.twoSum = function () {
  let pairs = [];
  for (outer=0; outer<this.length; outer++) {
    for (inner=outer+1; inner<this.length; inner++) {
      this[outer] + this[inner] === 0 ? pairs.push([outer, inner]) : "";
    }
  }
  return pairs;
}

let matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

Array.prototype.transpose = function () {
  let transposed = [];
  for (let col=0;col<this.length;col++) {
    let subArr = [];
    for (let row=0; row<this.length; row++) {
      subArr.push(this[row][col]);
    }
    transposed.push(subArr);
  }
  return transposed;
}
