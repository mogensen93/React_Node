// Lav en Student kasse
class Student {
    
    // Fields i student kassen
    classes = [];

    constructor(name1){
    this.name = name1;
    // KAN BRUGES I STEDET FOR FIELDS this.classes = [];
    }
    addClass(studentClass){
        this.classes.push(studentClass);
    }
}

module.exports = Student;
/*
const student = new Student("Rasmus");
student.addClass("React + Node");
student.addClass("Django");
console.log(student.name);
console.log(student.classes);*/

