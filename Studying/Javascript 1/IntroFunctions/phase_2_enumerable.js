Array.prototype.myEach = function(callback) {
  for (let i=0; i<this.length; i++) {
    callback(this[i]);
  }
};

// [1, 2, 3].myEach(function (ele) {
//   console.log(ele);
// });

Array.prototype.myMap = function(callback) {
  let newArr = [];
  this.myEach(function (ele) {newArr.push(callback(ele))})
  return newArr;
};

// [1, 2, 3].myMap(function (ele) { 
//   return ele * 2; 
// });


//non recursive
Array.prototype.myReduce = function (callback, initialValue) {
  let startValue;
  let remainingArray = [];
  if (initialValue) {
    startValue = initialValue;
    remainingArray = this;
  } else {
    startValue = this[0];
    remainingArray = this.slice(1);
  }
  remainingArray.myEach(function (ele) {
    startValue = callback(startValue, ele)
  })
  return startValue;
};

[1, 2, 3].myReduce(function (acc, el) {
  return acc + el;
}); // => 6

Array.prototype.myReduceRecurse = function (callback, initialValue) {
  if (this.length <= 1) {
    return callback(initialValue, this[0]);
  }
  let startValue;
  let remainingArray = [];
  if (initialValue) {
   startValue = callback(initialValue, this[0]);
   remainingArray = this.slice(1);
  } else {
    startValue = callback(this[0], this[1]);
    remainingArray = this.slice(2);
  }

  return remainingArray.myReduceRecurse(callback, startValue)
};

[1, 2, 3].myReduceRecurse(function (acc, el) {
  return acc + el;
}); // => 6