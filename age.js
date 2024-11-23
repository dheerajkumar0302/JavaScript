/*Question 2:
Write a JavaScript function that takes a person's age as input and determines:

If the person is under 13, return "You are a child."
If the person is between 13 and 19 (inclusive), return "You are a teenager."
If the person is 20 or older, return "You are an adult."*/

function determineAge(age) {
  if (age < 13) console.log("You are child");
  else if (age >= 13 && age <= 19) console.log("You are a teenager");
  else console.log("You are an adult");
}

determineAge(25);
