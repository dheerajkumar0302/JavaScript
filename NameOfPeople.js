//5. Get the Names of People with Odd Ages

const people = [
  { name: "Tom", age: 25 },
  { name: "Jerry", age: 22 },
  { name: "Spike", age: 35 },
];

function nameOfPeople(people) {
  console.log(people.filter((ele) => ele.age % 2 != 0).map((ele) => ele.name));
}

nameOfPeople(people);
