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
