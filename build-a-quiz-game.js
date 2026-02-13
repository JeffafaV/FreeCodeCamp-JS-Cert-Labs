/*
Build a Quiz Game
Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should create an array named questions.
The questions array should contain at least five objects, each having the keys category, question, choices, and answer.
The category key should have the value of a string representing a question category.
The question key should have the value of a string representing a question.
The choices key should have the value of an array containing three strings, which are alternative answers to the question.
The answer key should have the value of a string, representing the correct answer to the question. Also, the value of answer should be included in the choices array.
You should have a function named getRandomQuestion that takes an array of questions as a parameter and returns a random question object from the array.
You should have a function named getRandomComputerChoice that takes the array of the available choices as a parameter, and returns a random answer to the selected question.
You should have a function named getResults that takes the question object as the first parameter and the computer's choice as the second parameter. The function should return The computer's choice is correct! if the answer is correct. Otherwise, it returns The computer's choice is wrong. The correct answer is: <correct-answer>, where <correct-answer> is the value of the correct answer to the chosen question.
*/

const questions = [
  {
    category: "JavaScript",
    question: "Which method converts a JSON string into a JavaScript object?",
    choices: ["JSON.parse()", "JSON.stringify()", "Object.assign()"],
    answer: "JSON.parse()",
  },
  {
    category: "React",
    question: "What hook is used to manage state in a functional component?",
    choices: ["useState", "useEffect", "useContext"],
    answer: "useState",
  },
  {
    category: "CSS",
    question:
      "Which property is used to create space inside an element's border?",
    choices: ["margin", "padding", "border-spacing"],
    answer: "padding",
  },
  {
    category: "Databases",
    question: "Which SQL command is used to retrieve data from a table?",
    choices: ["SELECT", "INSERT", "UPDATE"],
    answer: "SELECT",
  },
  {
    category: "General Programming",
    question: "What data structure uses FIFO (First In, First Out)?",
    choices: ["Stack", "Queue", "Tree"],
    answer: "Queue",
  },
];

const getRandomQuestion = (questions) => {
  const randomQuestion =
    questions[Math.floor(Math.random() * questions.length)];
  return randomQuestion;
};

const getRandomComputerChoice = (choices) => {
  const randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
};

const getResults = (question, computerChoice) =>
  computerChoice === question.answer
    ? "The computer's choice is correct!"
    : `The computer's choice is wrong. The correct answer is: ${question.answer}`;

const question = getRandomQuestion(questions);
const choice = getRandomComputerChoice(question.choices);

console.log(getResults(question, choice));
