const faker = require("faker");
const Student = require("../Student.js");

let students = [];

for (let name = 0; name < 10; name++){
    const student = new Student (faker.name.firstName() , "" , faker.name.lastName() );
    students.push(student);
}

console.log(students);