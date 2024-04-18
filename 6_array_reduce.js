const arr = [1, 2, 3, 4, 5, 6, 7];

// let sum = arr.reduce((accu, curr, currIndx, arr) => {
//   nextVal = accu + curr;
//   console.log(accu, curr);
//   return nextVal;
// }, 0);

// console.log(sum);

const arr2 = ["aa", "ab", "bc", "ca", "ad", "cd", "ca", "ba"];

let segg = arr2.reduce((accu, curr) => {
  //   console.log(accu);

  let firstChar = curr[0];
  if (!accu[firstChar]) {
    accu[firstChar] = [curr];
  } else {
    accu[firstChar].push(curr);
  }
  return accu;
}, {});

// console.log(segg);

let arr3 = ["apple", "banana", "pear", "kiwi", "orange"];

let lenGrop = arr3.reduce((accu, curr) => {
  let lenStr = curr.length;
  if (!accu[lenStr]) {
    accu[lenStr] = [curr];
  } else {
    accu[lenStr].push(curr);
  }
  return accu;
}, {});

// console.log(lenGrop);

let arr4 = [25, 6, 1, 8, 9, 11, 3, 2, 4, 5, 12];

let maxVal = arr4.reduce((curr, accu) => {
  if (accu < curr) {
    accu = curr;
  }
  return accu;
}, 0);

// console.log(maxVal);

let arr5 = [2, 3, 4, 3, 5, 1, 2, 4, 3, 6, 7, 7, 7, 8, 9, 2];

let res = arr5.reduce((accu, curr) => {
  if (!accu[curr]) {
    accu[curr] = 1;
  } else {
    accu[curr] = accu[curr] + 1;
  }
  return accu;
}, {});

// console.log(res);

let arr6 = [
  [1, 2, 3],
  [4, 6, 1],
  [7, 8, 1],
  [6, 9, 10],
];

let flattenArr = arr6.reduce((accu, curr) => {
  curr.forEach((ele) => {
    accu.push(ele);
  });

  return accu;
}, []);

let flattenArr1 = arr6.reduce((accu, curr) => {
  return accu.concat(curr);
}, []);

// console.log(flattenArr1);

let arr7 = [1, 2, 3, 4, 5, 6, 7]; //- > '1234567'

// console.log(arr7.join(""));

const data = [
  { id: 1, category: "A", name: "Apple" },
  { id: 2, category: "B", name: "Banana" },
  { id: 3, category: "A", name: "Apricot" },
  { id: 4, category: "C", name: "Cherry" },
  { id: 5, category: "B", name: "Blueberry" },
  { id: 6, category: "A", name: "Avocado" },
];

let catGrp = data.reduce((acc, curr) => {
  let currCat = curr["category"];

  if (!acc[currCat]) {
    acc[currCat] = [curr];
  } else {
    acc[currCat].push(curr);
  }
  return acc;
}, {});

// console.log(catGrp);

let arr8 = [3, 4, 1, 1, 2, 8, 9, 2, 6, 7, 5, 1];
let nonDup = arr8.reduce((acc, curr) => {
  if (!acc.includes(curr)) {
    acc.push(curr);
  }

  return acc;
}, []);

const uppercase = (s) => {
  return s.toUpperCase();
};

const reverse = (s) => {
  return s.split(" ").reverse().join("");
};

const append = (s) => {
  return "Hello " + s;
};

const arr9 = [uppercase, reverse, append];

const initialValue = "learnersbucket";

let ress = arr9.reduce((acc, currFun) => {
  const newVal = currFun(acc);
  return newVal;
}, initialValue);

