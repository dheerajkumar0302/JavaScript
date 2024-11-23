//7. Group Users by Gender

const users = [
  { name: "Alice", gender: "Female" },
  { name: "Bob", gender: "Male" },
  { name: "Cathy", gender: "Female" },
  { name: "Dan", gender: "Male" },
];

function maleGender(users) {
  console.log(users.filter((ele) => ele.gender == "Male"));
}
maleGender(users);

function femaleGender(users) {
  console.log(users.filter((ele) => ele.gender == "Female"));
}
femaleGender(users);
