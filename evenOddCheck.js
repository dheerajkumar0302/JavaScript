/*Write a JavaScript function that takes two numbers as input and checks:

If both numbers are even, return "Both numbers are even."
If one number is even and the other is odd, return "One number is even, and one is odd."
If both numbers are odd, return "Both numbers are odd.*/

function evenOdd(num1, num2) {
  if (num1 % 2 == 0 && num2 % 2 == 0) console.log("Both numbers are even");
  else if ((num1 % 2 == 0 && num2 % 2 != 0) || (num1 % 2 != 0 && num2 % 2 == 0))
    console.log("One number is even, and one is odd");
  else console.log("Both numbers are odd");
}

evenOdd(5, 7);
