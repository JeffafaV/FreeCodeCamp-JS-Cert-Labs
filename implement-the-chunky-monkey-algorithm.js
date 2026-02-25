/*
Implement the Chunky Monkey Algorithm
Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

Write a function named chunkArrayInGroups that takes an array as first argument and a number as second argument. The function should split the array into smaller arrays of length equal to the second argument and returns them as a two-dimensional array.
*/

const chunkArrayInGroups = (arr, max) => {
  const groupArr = [];
  let tempArr = [];
  for (let i = 0; i < arr.length; i++) {
    tempArr.push(arr[i]);

    if ((i + 1) % max === 0 || i + 1 === arr.length) {
      groupArr.push(tempArr);
      tempArr = [];
    }
  }

  return groupArr;
};

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
