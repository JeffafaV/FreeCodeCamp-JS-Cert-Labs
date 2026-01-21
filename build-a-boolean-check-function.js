/*
Build a Boolean Check Function
In this lab, you will build a function that checks if a value is classified as a boolean primitive.

Boolean primitives are true and false.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have a function called booWho that receives one argument.
If the argument received is a boolean primitive, the function should return true.
If the argument is any other value, the function should return false.
*/

const booWho = (arg) => (typeof arg === "boolean" ? true : false);

console.log(booWho(true));
console.log(booWho(false));
console.log(booWho([1, 2, 3]));
console.log(booWho([].slice));
console.log(booWho({ a: 1 }));
console.log(booWho(1));
console.log(booWho(NaN));
console.log(booWho("a"));
console.log(booWho("true"));
console.log(booWho("false"));
