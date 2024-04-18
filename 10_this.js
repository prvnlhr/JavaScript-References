/*
Types of functions in JS
|> Regular function
|> Arrow function
|> Fuction constructor
|> Object methods
|> IIFE

The value of 'this' keyword depends in the execution context
for the above different types of function
*/

//* 1. Regular function
//|> when a regular function is invoked it creates its own  new exec.
//|> context. The value of `this` depends on the where the function is invoked.
//|> Regular functions have their this value dynamically bound at runtime based on how they are called.
// -> Global context -> this == global object
// -> Method context -> this == current object

//* Arrow funtion
//|> In case of arrow function, it does not have its own this.
//|> The value of this depends on the where, the arrow function is defined
//|> So has access to its surrounding context for ex, regular function, object

const example = {
  blog: "learnersbucket",
  displayBlog: function () {
    console.log(this === example); //|> this refers to object
    function inner() {
      // this refers to the window object
      console.log(this);
      console.log(this === window);
      console.log(this.blog);
    }
    inner();
  },
};

// run this in browser, in vscode no access to window
// example.displayBlog(); //|> -> over there we get displayBlog as a regular function

let thisArg = {
  name: "John",
  age: 32,
  DOB: "23-05-1983",
};

function consoleInfo(arg1, arg2) {
  console.log(this, arg1, arg2);
}

// consoleInfo.call(thisArg, "normalArg1-call", "normalArg2"); //|> comma seperated

// consoleInfo.apply(thisArg, ["normalArg1-apply", "normalArg2", "normalArg3"]); //|> In array

// Difference between them is the way we pass normal arguments

const bindedFun1 = consoleInfo.bind(thisArg, "normalArg1-bind1", "normalArg2");
const bindedFun2 = consoleInfo.bind(thisArg);

bindedFun1();
bindedFun2("normalArg1-bind2", "normalArg2");  
