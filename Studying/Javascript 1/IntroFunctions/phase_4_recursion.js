function range(start, end) {
  if (start === end) {
    return [end];
  }
  let upNext = start + 1
  return [start].concat(range(upNext, end))
};
// console.log(range(1,8))

function sumRec(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  return arr[0] + sumRec(arr.slice(1));
};
// console.log(sumRec([1,2,3]));

function exponent(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * exponent(base, exp - 1);
};
// console.log(exponent(4,0));

// 0,1,1,2,3,5,8,13
function fibonacci(n) {
  if (n === 1) {
    return [0];
  }
  if (n === 2) {
    return [0,1];
  }
  let fib1 = fibonacci(n - 1);
  let fib2 = fibonacci(n - 2);
  let newFib = fib1[fib1.length - 1] + fib2[fib2.length - 1];
  return fib1.concat([newFib]);
};
// console.log(fibonacci(8));

// needs review --> had to look at solution
function deepDup(arr) {
  if (!(arr instanceof Array)) {
    return arr
  }
  return arr.map((ele) => {return deepDup(ele)});
};
// let base = [1,2,3]
// let a = [[1,5],2,[3,10,6]]
// let b = deepDup(base)

function bSearch(arr, target) {
  let mid = Math.floor(arr.length/2);
  let midEle = arr[mid];
  if (arr.length === 1 && midEle !== target) {
    return -1;
  }
  if (midEle === target) {
    return mid;
  }
  if (midEle < target) {
    subProb = bSearch(arr.slice(mid + 1), target);
    return  subProb === -1 ? -1 : subProb + mid + 1;
  } else {
    return bSearch(arr.slice(0, mid), target) ;
  }
};

let sortedArr = [0,1,2,3,4,5,6];
console.log(bSearch(sortedArr, 2));
