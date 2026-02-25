/*
Build a Profile Lookup
In this lab, you will build a profile lookup that looks up information about people in a contacts list.

For this example imagine there is a contact named Akira Laine, the lookUpProfile("Akira", "lastName") should return Laine.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should create a function named lookUpProfile that takes a name and a property as arguments.
You should retrieve contact information from the provided contacts array.
If the function receives a contact name and the property exists on the related contact, then the property's value should be returned.
If the name passed to the function does not match any contacts in the contacts array, then the function should return "No such contact".
If the property does not exist on a found contact, then the function should return "No such property".
*/

let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

const lookUpProfile = (contact, prop) => {
  let index = 0;
  let profile = null;
  for (; index < contacts.length; index++) {
    if (contacts[index].firstName === contact) {
      profile = contacts[index];
    }
  }

  if (profile === null) {
    return "No such contact";
  }
  if (profile[prop] === undefined) {
    return "No such property";
  }

  return profile[prop];
};

console.log(lookUpProfile("Kristian", "lastName"));
console.log(lookUpProfile("Sherlock", "likes"));
console.log(lookUpProfile("Harry", "likes"));
console.log(lookUpProfile("Bob", "number"));
console.log(lookUpProfile("Bob", "potato"));
console.log(lookUpProfile("Akira", "address"));
