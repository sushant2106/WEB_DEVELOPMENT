let arr = [1, 2, 3, 4];
let a = arr.map((ele) => {
  console.log(ele);
  return ele + 1;
})
console.log(a);

let arr2 = [10, 15, 23, 4, 3];
let b = arr2.filter((ele) => {
  return ele < 10;
})
console.log(b);
//Array reduce
let arr3 = [1, 2, 3, 4, 1];
let newnum = arr3.reduce((h1, h2) => {
  return h1 + h2;
})
console.log(newnum)