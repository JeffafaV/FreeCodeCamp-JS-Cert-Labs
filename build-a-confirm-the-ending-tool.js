/*
Build a Confirm the Ending Tool
In this lab, you will implement a function that checks if a string ends with the given target string.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should create a function named confirmEnding that takes two parameters: the string to check and the string to check against.
The function should return true if the first string ends with the second string, and false otherwise.
You should not use the .endsWith() method; instead, use one of the JavaScript substring methods to achieve this.
*/

const confirmEnding = (str, substr) => {
  if (!str.includes(substr)) {
    return false;
  }

  const slicedStr = str.slice(str.length - substr.length);

  if (slicedStr === substr) {
    return true;
  }

  return false;
};

function testCases() {
  console.log(confirmEnding("Bastian", "n"));
  console.log(confirmEnding("Congratulation", "on"));
  console.log(confirmEnding("Connor", "n"));
  console.log(
    confirmEnding(
      "Walking on water and developing software from a specification are easy if both are frozen",
      "specification",
    ),
  );
  console.log(confirmEnding("He has to give me a new name", "name"));
  console.log(confirmEnding("Open sesame", "same"));
  console.log(confirmEnding("Open sesame", "sage"));
  console.log(confirmEnding("Open sesame", "game"));
  console.log(
    confirmEnding(
      "If you want to save our world, you must hurry. We don't know how much longer we can withstand the nothing",
      "mountain",
    ),
  );
  console.log(confirmEnding("Abstraction", "action"));
}

testCases();
