/*
Implement the Truncate a String Algorithm
In this lab, you will practice truncating a string to a certain length.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have a function truncateString that accepts two arguments, the first one a string, the second one a number.
If the length of the string is more than the given number, the string should be truncated to reduce the length so that it is equal the given number, and ... should be appended at the end of the truncated string.
If the length of the string is equal to or lower than the given number, the string should be returned unchanged.
*/

const truncateString = (str, ln) => {
  if (ln >= str.length) {
    return str;
  }

  const slicedStr = str.slice(0, ln);
  const newStr = slicedStr + "...";

  return newStr;
};

function testCases() {
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
  console.log(
    truncateString("Peter Piper picked a peck of pickled peppers", 11),
  );
  console.log(
    truncateString(
      "A-tisket a-tasket A green and yellow basket",
      "A-tisket a-tasket A green and yellow basket".length,
    ),
  );
  console.log(
    truncateString(
      "A-tisket a-tasket A green and yellow basket",
      "A-tisket a-tasket A green and yellow basket".length + 2,
    ),
  );
  console.log(truncateString("A-", 1));
  console.log(truncateString("Absolutely Longer", 2));
}

testCases();
