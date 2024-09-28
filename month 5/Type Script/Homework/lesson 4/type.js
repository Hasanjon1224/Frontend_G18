"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var students = [
    { id: 1, name: "hasanboy", grades: [89, 91, 92] },
    { id: 2, name: "husanboy", grades: [90, 90, 92] },
    { id: 3, name: "javlon", grades: [80, 99, 93] },
    { id: 4, name: "tohir", grades: [80, 99, 93] },
    { id: 5, name: "jahongir", grades: [80, 99, 93] },
    { id: 6, name: "abdulloh", grades: [80, 99, 93] },
    { id: 7, name: "azizbek", grades: [85, 90, 88] },
    { id: 8, name: "farhod", grades: [78, 85, 82] },
    { id: 9, name: "umid", grades: [92, 94, 91] },
    { id: 10, name: "bekzod", grades: [88, 85, 89] },
    { id: 11, name: "ziyod", grades: [81, 79, 84] },
    { id: 12, name: "murod", grades: [87, 90, 85] },
    { id: 13, name: "jasur", grades: [75, 80, 77] },
    { id: 14, name: "azamat", grades: [89, 93, 92] },
    { id: 15, name: "mirjalol", grades: [91, 88, 90] },
    { id: 16, name: "islom", grades: [84, 82, 86] },
    { id: 17, name: "umidjon", grades: [79, 83, 81] },
    { id: 18, name: "baxodir", grades: [86, 89, 85] },
    { id: 19, name: "doston", grades: [80, 82, 79] },
    { id: 20, name: "salim", grades: [90, 87, 91] },
    { id: 21, name: "bobur", grades: [88, 90, 85] },
    { id: 22, name: "odil", grades: [82, 78, 83] },
    { id: 23, name: "sanjar", grades: [85, 87, 89] },
    { id: 24, name: "firdavs", grades: [80, 85, 81] },
    { id: 25, name: "bilol", grades: [91, 89, 92] },
    { id: 26, name: "islomjon", grades: [78, 81, 80] },
    { id: 27, name: "behzod", grades: [85, 88, 87] },
    { id: 28, name: "jahongirbek", grades: [90, 92, 88] },
    { id: 29, name: "shuhrat", grades: [88, 84, 85] },
    { id: 30, name: "anvar", grades: [79, 83, 81] },
];
function addStudent(newStudent) {
    students.push(newStudent);
    return students;
}
function getStudentGrades(student) {
    return student.grades;
}
function calculateAverageGrade(student) {
    var grades = student.grades;
    var total = grades.reduce(function (sum, grade) { return sum + grade; }, 0);
    return total / grades.length;
}
var student = students[0]; // Ali
console.log("Baholar: ".concat(getStudentGrades(student).join(", ")));
console.log("O'rtacha baho: ".concat(calculateAverageGrade(student).toFixed(2)));
function getStudentAverage(students) {
    return students.map(function (student) {
        var total = student.grades.reduce(function (sum, grade) { return sum + grade; }, 0);
        return total / student.grades.length;
    });
}
var averages = getStudentAverage(students);
console.log(averages);
var newStudent = {
    id: 1, // Talabaning ID raqami
    name: "Ranoldo", // Talabaning ismi
    grades: [5, 4, 6], // Talabaning bahosi
};
var updatedStudentList = addStudent(newStudent);
console.log(updatedStudentList);
function categorizeStudents(students) {
    var categories = {
        A: [],
        B: [],
        C: [],
        D: [],
        F: [],
    };
    students.forEach(function (student) {
        var averageGrade = calculateAverageGrade(student);
        if (averageGrade >= 90) {
            categories.A.push(student);
        }
        else if (averageGrade >= 80) {
            categories.B.push(student);
        }
        else if (averageGrade >= 70) {
            categories.C.push(student);
        }
        else if (averageGrade >= 60) {
            categories.D.push(student);
        }
        else {
            categories.F.push(student);
        }
    });
    return categories;
}
// Funksiya: Talabaning o'rtacha bahosini hisoblash
function calculateAverage(student) {
    var total = student.grades.reduce(function (sum, grade) { return sum + grade; }, 0);
    return total / student.grades.length;
}
// Misol: Talabalarni kategoriyalarga ajratish
var categorizedStudents = categorizeStudents(students);
// console.log(categorizedStudents);
function findStudentById(id) {
    return this.students.find(function (student) { return student.id === id; });
}
console.log(students);
