/*
Debug Type Coercion Errors in a Buggy App
You've just joined a local web development shop, and your first assignment is to clean up some buggy code left behind by the previous developers.

They were attempting simple arithmetic operations, but something went wrong, the results don't make sense. Your task is to review, debug, and correct the code so it performs as expected and is easier to read.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have a variable named firstResult that correctly adds the numbers 5 and 10 to produce the value 15.
You should have a variable named secondResult that correctly subtracts 5 from 8 to produce the value 3.
You should have a variable named thirdResult that produces the value 6 by adding two numbers. Replace the boolean currently used in the expression with a number.
You should have a variable named fourthResult that produces the value 8 by adding two numbers. Replace the boolean currently used in the expression with a number.
You should have a variable named fifthResult that correctly multiplies two numbers to get the product 20. Replace the string currently used in the expression with a number.
You should have a variable named sixthResult that correctly adds two numbers to produce the value 22. Replace the null currently used in the expression with a number.
*/

const firstResult = 5 + 10;
console.log(`5 + 10 = ${firstResult}`);

const secondResult = 8 - 5;
console.log(`8 - 5 = ${secondResult}`);

const thirdResult = 1 + 5;
console.log(`1 + 5 = ${thirdResult}`);

const fourthResult = 0 + 8;
console.log(`0 + 8 = ${fourthResult}`);

const fifthResult = 10 * 2;
console.log(`10 * 2 = ${fifthResult}`);

const sixthResult = 0 + 22;
console.log(`0 + 22 = ${sixthResult}`);
