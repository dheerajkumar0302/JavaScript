//4. Find the Average Salary of Employees

const employees = [
  { name: "A", salary: 5000 },
  { name: "B", salary: 7000 },
  { name: "C", salary: 6000 },
];

function averageSalary(employees) {
  let salary = employees.reduce((x, y) => x + y.salary, 0);
  return salary / employees.length;
}

console.log(averageSalary(employees));
