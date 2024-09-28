"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DegreeLevel;
(function (DegreeLevel) {
    DegreeLevel["Bachelors"] = "Bachelors";
    DegreeLevel["Masters"] = "Masters";
    DegreeLevel["PHD"] = "PHD";
})(DegreeLevel || (DegreeLevel = {}));
// Universitetdagi ba'zi fakultetlar va talabalarning ma'lumotlari:
var computerScienceDepartment = {
    name: "Computer Science",
    head: "Dr. John Doe",
    students: [
        { name: "Alice Johnson", age: 21, degree: DegreeLevel.Bachelors },
        { name: "Bob Smith", age: 24, degree: DegreeLevel.Masters },
        { name: "Charlie Brown", age: 28, degree: DegreeLevel.PHD },
    ],
};
var mathematicsDepartment = {
    name: "Mathematics",
    head: "Dr. Jane Doe",
    students: [
        { name: "David Williams", age: 22, degree: DegreeLevel.Bachelors },
        { name: "Eve Davis", age: 25, degree: DegreeLevel.Masters },
        { name: "Frank Miller", age: 30, degree: DegreeLevel.PHD },
    ],
};
var romanGermanDepartment = {
    name: "Roman German",
    head: "Dr. John Doe",
    students: [],
};
// 1. Talabani qabul qilish
function addStudent(department, student) {
    department.students.push(student);
}
// 2. Talabalarni ro'yxatini ko'rsatish
function listStudents(department) {
    console.log("Students in the ".concat(department.name, " department:"));
    department.students.forEach(function (student, index) {
        console.log("".concat(index + 1, ". ").concat(student.name, " - ").concat(student.degree));
    });
}
// 3. Talabani yoki kafedrani tekshirish
function checkStudentExists(department, studentName) {
    return department.students.some(function (student) { return student.name === studentName; });
}
function checkDepartmentExists(departmentName, departments) {
    return departments.some(function (department) { return department.name === departmentName; });
}
// Misol uchun, yangi talaba qo'shish:
var newStudent = { name: "Alice Johnson", age: 21, degree: DegreeLevel.Bachelors };
addStudent(computerScienceDepartment, newStudent);
// Talabalar ro'yxatini ko'rish:
listStudents(computerScienceDepartment);
// Talabaning mavjudligini tekshirish:
var exists = checkStudentExists(computerScienceDepartment, "Alice Johnson");
console.log("Alice Johnson mavjud: ".concat(exists));
var universityDepartments = [
    computerScienceDepartment,
    mathematicsDepartment,
];
console.log(universityDepartments);
