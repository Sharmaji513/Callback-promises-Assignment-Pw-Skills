/* 3. Age in Days.
Write a function that takes in an array of integers and a callback function, and returns a new array where each
Write a JavaScript function called ageInDays that accepts an object containing a person's first name, last
name, and age in years as input. The function should concatenate the first and last name into a single string
and store it in a variable called fullName. It should then calculate the person's age in days and store it in a
variable called ageInDays. */

const person = {
  firstName: "Sachin",
  lastName: "Sharma",
  age: 23,
};

function ageInDays(person, callback) {
  const fullName = person.firstName + " " + person.lastName;
  const ageInDays = person.age * 365; // Assuming 1 year = 365 days
  callback(fullName, ageInDays);
}

function displayAge(fullName, ageInDays) {
  console.log(fullName + " is " + ageInDays + " days old.");
}


ageInDays(person, displayAge);