let arr = [];
arr.push(5);
arr.push(6);
arr.push(7);
arr.push(8);
arr.push(12);

console.log(arr[2]);
console.log("length = ", arr.length);

// |> array methods

let ele1 = arr.at(1);

console.log("ele1 =", ele1);

let ele2 = arr.at(-2);
console.log("ele2 =", ele2);

let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6];
let arr3 = [11, 12, 13];
let concarr = arr1.concat(arr2, arr3); // always returns new arr
// console.log(concarr);

let arrdemo = [1, 2, 3, 4, 5];
arrdemo.copyWithin(0, 3); // Copies elements starting from index 3 and pastes them starting at index 0
// console.log(arrdemo); // Output: [4, 5, 3, 4, 5]

let arr5 = [1, 2, 3, 4, 5, 6];
let arr_p = arr5.entries();

// console.log(arr_p.next());
// console.log(arr_p.next());
// console.log(arr_p.next());
// console.log(arr_p.next());
// ...so on

const isEven = (curr) => curr < 6;
const arr6 = [1, 2, 3, 4, 5, 6];
console.log(arr6.every(isEven));

let arr7 = [1, 2, 3, 4, 5, 6];
console.log(arr7.fill(1, 2, 4));

const arr8 = [5, 12, 8, 130, 44];
let found = arr8.find((curr) => curr % 2 == 0); // also there is findLast()
console.log("found =", found);

let found2 = arr8.findIndex((curr) => curr % 2 == 0); // also there is findLastIndex()
console.log("found2 =", found2);

// let mat = [
//   [1, 2, 3],
//   [3, 4],
//   [5, 6, 7],
// ];

let mat = [
  [1, 2, 3],
  [3, 4],
  [5, 6, 7],
];

console.log("flat mat", mat.flat());

let arr9 = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(Array.from(arr9, (x) => x * x));
console.log(Array.from(arr9, (x) => x % 2 == 0));

let str1 = "This is sample string";
console.log(Array.from(str1.split(" "), (s) => s.length));

console.log(arr9.includes(5));

console.log(arr9.includes(7));
console.log(str1.split(" ").includes("sample"));

console.log(Array.isArray(arr9));

console.log(arr9.join("->"));
console.log(str1.split(" ").join("->"));

let revarr9 = arr9.reverse();
console.log("revarr9", revarr9);

let arr10 = [1, 2, 3, 4];
console.log(arr10.shift());

let arr11 = [1, 2, 3, 4, 5];
let unshifted = arr11.unshift(12, 13);
console.log(unshifted, arr11);

let arr12 = [1, 2, 3, 4, 5, 6];

let array12Iter = arr12.values();

for (let iter of array12Iter) {
  console.log(`item ${iter}`);
}

let arr13 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

console.log("slice1 =", arr13.slice(2, 6)); // excluding end, does not mutates og arr.
console.log("slice2 =", arr13.slice(2)); // excluding end, does not mutates og arr.
console.log("slice3 =", arr13.slice(2, -3)); // excluding end, does not mutates og arr.

let arr14 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
arr14.splice(2, 3, "a", "b", "c", "d");
console.log(arr14);

let arr15 = [3, 1, 6, 2, 8, 0, 12];

arr15.sort((a, b) => a - b);
console.log("sorted", arr15);

let arr16 = [
  [1, 2],
  [4, 5],
  [6, 6],
  [0, 12],
];


arr16.sort((a, b) => {
  if (a[1] < b[1]) {
    return 1;
  } else if (a[1] > b[1]) {
    return -1;
  }
  return 0;
});
console.log(arr16);

