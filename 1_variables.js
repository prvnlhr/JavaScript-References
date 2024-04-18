let number = 5;
console.log(number);

let float = 1234.56789;
console.log(float);

let expo = 10e5;
console.log(expo);

let binary = 0b10110;
console.log(binary);

let negativeInf = -Infinity;
console.log(negativeInf);

let positiveInf = Infinity;
console.log(positiveInf);

let nullVariable = null;
console.log(nullVariable);

//|> Methods ::

// 1. toFixed(): Converts a number into a string, rounding the number to a specified number of decimal places.
let num1 = 3.14159;
console.log(num1.toFixed(2)); // Output: "3.14"  2 digits after point

// 2. toPrecision(): Formats a number using fixed-point notation, with a specified number of digits.
let num2 = 1234.56789;
console.log(num2.toPrecision(4)); // Output: "1235" gives 4 significant number

// 3. toString(): Converts a number to a string.
let num3 = 42;
console.log(num3.toString()); // Output: "42"

// 4. toLocaleString(): Converts a number into a string using the locale-specific format.
let num4 = 1234567.89;
console.log(num4.toLocaleString()); // Output: "1,234,567.89" (formatted based on locale)

// 5. parseInt(): Parses a string and returns an integer.
let str1 = "42";
console.log(parseInt(str1)); // Output: 42

// 6. parseFloat(): Parses a string and returns a floating-point number.
let str2 = "3.14";
console.log(parseFloat(str2)); // Output: 3.14

// 7. valueOf(): Returns the primitive value of a Number object.
let num5 = new Number(42);
console.log(num5.valueOf()); // Output: 42

// 8. isNaN(): Determines whether a value is NaN (Not a Number).
console.log(isNaN(42)); // Output: false
console.log(isNaN("hello")); // Output: true

// 9. isFinite(): Determines whether a value is finite (not NaN, Infinity, or -Infinity).
console.log(isFinite(42)); // Output: true
console.log(isFinite(Infinity)); // Output: false
