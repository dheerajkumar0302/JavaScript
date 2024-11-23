// . Calculate the Total Age of People Above 30

const people = [
  { name: "John", age: 25 },
  { name: "Jane", age: 35 },
  { name: "Mark", age: 40 },
  { name: "Lucy", age: 29 },
];

function calculateAge() {
  console.log(
    people
      .filter((ele) => ele.age > 30)
      .map((ele) => ele.age)
      .reduce((x, y) => x + y, 0)
  );
}

calculateAge(people);
