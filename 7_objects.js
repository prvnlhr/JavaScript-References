let obj1 = {};
obj1["name"] = "Praveen";
obj1["ph"] = "7874554";
console.log("obj1 =", obj1);
// -----------------------------------------------------------------

function Person(name, ph) {
  this.name = name;
  this.ph = ph;
}

let p1 = new Person("Praveen", 784445);
console.log(p1);
// -----------------------------------------------------------------

class Person1 {
  constructor(name, ph) {
    this.name = name;
    this.ph = ph;
  }
}
let p2 = new Person1("Praveen", 784548);
console.log("p1 =", p1);
// -----------------------------------------------------------------

const obj2 = {
  firstName: "Praveen",
  printFullName: function () {
    console.log(this.firstName, this.lastName);
  },
};

obj2["lastName"] = "Lohar";
console.log("obj2 =", obj2);
obj2.printFullName();

// -----------------------------------------------------------------

const obj3 = Object.assign(obj2);
console.log("obj3 =", obj3);

let objCopy = {};
Object.assign(objCopy, obj2);
console.log("objCopy =", objCopy);

// -----------------------------------------------------------------

const obj4 = {
  firstName: "Praveen",
  lastName: "Lohar",
  ph: 855858,
  age: 27,
};

console.log(Object.entries(obj4));

// -----------------------------------------------------------------

for (let [key, val] of Object.entries(obj4)) {
  console.log(key, "->", val);
}

// -----------------------------------------------------------------

let arr = [
  ["key1", "One"],
  ["key2", "Two"],
  ["key3", "Three"],
];

const objFromArr = Object.fromEntries(arr);
console.log("objFromArr =", objFromArr);

// -----------------------------------------------------------------
// |> seal() ---------------
const obj6 = { a: 1, b: 2 };
Object.seal(obj6);
obj6.a = 10; // Allowed
obj6.c = 3; // Not allowed
delete obj6.b; // Not allowed

// |> freeze ---------------
const obj7 = { a: 1, b: 2 };
Object.freeze(obj7);
// obj7.a = 10; // Not allowed
// obj7.c = 3; // Not allowed
// delete obj7.b; // Not allowed

// -----------------------------------------------------------------

const obj8 = { a: 1, b: 2, c: 3 };

// using `hasOwnProperty`
console.log(obj8.hasOwnProperty("b")); //  does not check prototype chain
console.log("b" in obj8); // check prototype chain also

// OR using `in`
console.log("a" in obj8);
