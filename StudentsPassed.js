// 10. Check if All Students Passed
Array:
const students = [
    { name: "A", marks: 45 },
    { name: "B", marks: 35 },
    { name: "C", marks: 50 },
];

function checkStudentPassed(students)
{
    return students.every(students => students.marks >= 40);
}

console.log(checkStudentPassed(students));