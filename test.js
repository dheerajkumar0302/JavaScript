var number = 10;
function evenOdd(number) {
  if (number % 2 == 0) console.log("even");
  else console.log("odd");
}
evenOdd(number);
function posNeg(number) {
  if (number > 0) console.log("positive");
  else if (number < 0) console.log("negative");
  else console.log("equal to zero");
}
posNeg(number);

function greaterNumber(num1, num2) {
  if (num1 > num2) console.log(num1 + "is greater");
  else if (num2 > num1) console.log(num2 + "is greater");
  else console.log("equal");
}
greaterNumber(2, 5);

// 90 and above: A
// 75-89: B
// 50-74: C
// Below 50: Fail

function grade(marks) {
  if (marks >= 90) console.log("A");
  else if (marks >= 75 && marks <= 89) console.log("B");
  else if (marks >= 50 && marks <= 74) console.log("C");
  else console.log("fail");
}
grade(55);

// Write a JavaScript function that takes three numbers as input, calculates their sum, and checks if the sum is greater than 15.
//  Use an if-else statement to return an appropriate message indicating whether the sum is greater than 15 or not.

function add(a, b, c) {
  sum = a + b + c;
  if (sum > 15) console.log(sum + "is greater than 15");
  else console.log(sum + " is not greater than 15");
}

add(2, 5, 7);

const data = [
  {
    name: "Dheeraj",
    age: 25,
  },
  {
    name: "Nitu",
    age: 20,
  },
];

function ageFind(data) {
  for (let index = 0; index < data.length; index++) {
    if (data[index].age > 20) console.log(data[index].name);
  }
}

ageFind(data);

const userData = [
  {
    name: "akash",
    age: 26,
  },
  {
    name: "vikash",
    age: 27,
  },
  {
    name: "krishna",
    age: 30,
  },
];

const agesGreaterThan25 = userData
  .filter((user) => user.age > 25)
  .map((user) => user.age)
  .reduce((x, y) => x + y, 0);

console.log(agesGreaterThan25);
