let s1 = "String one";
let s2 = "String two";
let s3 = `String three`;

//|> Methods::

console.log(s1.charAt(2));
console.log(s1[2]);

console.log(s1.at(2));
console.log(s1.at(-2));

console.log(s1.concat(s2, s3));

let str1 = "This is sample string in javascript";
console.log(str1.startsWith("Th"));
console.log(str1.endsWith("pt"));
console.log(str1.endsWith("tp"));

console.log(str1.toLowerCase());
console.log(str1.toUpperCase());

let str2 = " This is sample string in JavaScript ";

console.log(str2.trim());
console.log(str2.trimStart());
console.log(str2.trimEnd());

const str3 = "The quick brown fox jumps over the lazy dog.";
const str4 = "The,quick,brown,fox,jumps,over,the,lazy,dog.";
console.log(str3.split(" "));
console.log(str4.split(","));
console.log(str4.split(",", 4));

let str5 = "Javascript";

console.log(str5.substring(2, 4));

//|> supports -ve indexing
console.log(str5.slice(2, 4));
console.log(str5.slice(-5, -2));

const str6 = "To be, or not to be, that is the question.";

console.log(str6.includes("not"));
console.log(str6.includes("not", 10));
console.log(str6.includes("not", 13));
console.log(str6.includes("eb"));

console.log(str6.indexOf("not"));

//TODO :  Arrays & Methods, Objects, Functions
