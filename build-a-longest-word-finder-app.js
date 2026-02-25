/*
Build a Longest Word Finder App
In this lab, you will build a function that returns the length of the longest word in the provided sentence.

For example, in the sentence "The quick brown fox jumped over the lazy dog", the longest word is "jumped", which has a length of 6.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should create a function named findLongestWordLength that takes a string as an argument.
The function should return the length of the longest word in the string.
*/

const findLongestWordLength = (sentence) => {
  const wordList = sentence.split(" ");
  let longestWordLength = 0;

  for (const word of wordList) {
    if (word.length > longestWordLength) {
      longestWordLength = word.length;
    }
  }

  return longestWordLength;
};

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog"),
);
console.log(findLongestWordLength("May the force be with you"));
console.log(findLongestWordLength("Google do a barrel roll"));
console.log(findLongestWordLength("Googling do a barrel roll"));
console.log(
  findLongestWordLength(
    "What is the average airspeed velocity of an unladen swallow",
  ),
);
console.log(
  findLongestWordLength(
    "What if we try a super-long word such as otorhinolaryngology",
  ),
);
