/*
Implement the Mutations Algorithm
Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

Create a function named mutation that takes an array as its argument.
mutation should return true if the string in the first element of the array contains all of the letters of the string in the second element of the array, and false otherwise. For example:
mutation(["hello", "Hello"]), should return true because all of the letters in the second string are present in the first, ignoring case.
mutation(["hello", "hey"]) should return false because the string hello does not contain a y.
mutation(["Alien", "line"]), should return true because all of the letters in line are present in Alien.
*/

const mutation = (arr) => {
  const firstArr = arr[0].toLowerCase();
  const secArr = arr[1].toLowerCase();

  for (const char of secArr) {
    if (!firstArr.includes(char)) {
      return false;
    }
  }

  return true;
};

console.log(mutation(["hello", "hey"]));
console.log(mutation(["hello", "Hello"]));
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(mutation(["Mary", "Army"]));
console.log(mutation(["Mary", "Aarmy"]));
console.log(mutation(["Alien", "line"]));
console.log(mutation(["floor", "for"]));
console.log(mutation(["hello", "neo"]));
console.log(mutation(["voodoo", "no"]));
console.log(mutation(["ate", "date"]));
console.log(mutation(["Tiger", "Zebra"]));
console.log(mutation(["Noel", "Ole"]));
