enum DegreeLevel {
  Bachelors = "Bachelors",
  Masters = "Masters",
  PHD = "PHD",
}

type Student = {
  name: string;
  age: number;
  degree: DegreeLevel;
};

type Department = {
  name: string;
  head: string;
  students: Student[];
};

// Universitetdagi ba'zi fakultetlar va talabalarning ma'lumotlari:

const computerScienceDepartment: Department = {
  name: "Computer Science",
  head: "Dr. John Doe",
  students: [
    { name: "Alice Johnson", age: 21, degree: DegreeLevel.Bachelors },
    { name: "Bob Smith", age: 24, degree: DegreeLevel.Masters },
    { name: "Charlie Brown", age: 28, degree: DegreeLevel.PHD },
  ],
};

const mathematicsDepartment: Department = {
  name: "Mathematics",
  head: "Dr. Jane Doe",
  students: [
    { name: "David Williams", age: 22, degree: DegreeLevel.Bachelors },
    { name: "Eve Davis", age: 25, degree: DegreeLevel.Masters },
    { name: "Frank Miller", age: 30, degree: DegreeLevel.PHD },
  ],
};

const romanGermanDepartment: Department = {
  name: "Roman German",
  head: "Dr. John Doe",
  students: [],
}

// 1. Talabani qabul qilish
function addStudent(department: Department, student: Student): void {
  department.students.push(student);
}

// 2. Talabalarni ro'yxatini ko'rsatish
function listStudents(department: Department): void {
  console.log(`Students in the ${department.name} department:`);
  department.students.forEach((student, index) => {
    console.log(`${index + 1}. ${student.name} - ${student.degree}`);
  });
}

// 3. Talabani yoki kafedrani tekshirish
function checkStudentExists(department: Department, studentName: string): boolean {
  return department.students.some(student => student.name === studentName);
}

function checkDepartmentExists(departmentName: string, departments: Department[]): boolean {
  return departments.some(department => department.name === departmentName);
}

// Misol uchun, yangi talaba qo'shish:
const newStudent: Student = { name: "Alice Johnson", age: 21, degree: DegreeLevel.Bachelors };
addStudent(computerScienceDepartment, newStudent);

// Talabalar ro'yxatini ko'rish:
listStudents(computerScienceDepartment);

// Talabaning mavjudligini tekshirish:
const exists = checkStudentExists(computerScienceDepartment, "Alice Johnson");
console.log(`Alice Johnson mavjud: ${exists}`);


const universityDepartments: Department[] = [
  computerScienceDepartment,
  mathematicsDepartment,
];



console.log(universityDepartments);

export{}
