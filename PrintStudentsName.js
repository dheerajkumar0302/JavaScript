// 2. Find Names of All Students Who Scored Above 80

const students = [
  { name: "Alice", score: 70 },
  { name: "Bob", score: 85 },
  { name: "Charlie", score: 90 },
  { name: "David", score: 60 },
];

function printName(students) {
  console.log(students.filter((ele) => ele.score > 80).map((ele) => ele.name));
}

printName(students);
