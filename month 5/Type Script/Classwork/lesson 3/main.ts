// console.log("error");
// throw new Error("Something went wrong");
// console.log(true + 10);
// console.log(typeof (new Date));
//  TypeScriptda asosiy malumot turlari
// firstNumber: number[] = [1, 2]
//  let firstNumber: number = 12;
// firstNumber = 12 + 12;
//  console.log(firstNumber)
//  let secondNumber: number[] = [];
// let third = NaN;
// console.log(third);
// console.log(secondNumber);
// let f: {name: string} = {name: "Hasanjon"};
// f.name = "Yusufjon";
// console.log(typeof typeof f.name !== "string" ? "husanxon" : 12);
// var g: any;
// g = 12;
// g = new Date();
// g = "Yusufjon";
// g = true;
// g = () => {};
// console.log(typeof g !== "string" ? "husanxon" : 12);
// export {}
// function pow(x: number, y: number): number {
//   return 4 ** 7;
// }
// var add = (x: number, y: number): number => x + y;
// console.log(add(2, 4));
// console.log(pow());
// function log1(x: number): void {
//   console.log(x);
// }
// console.log(log1(2));
// function someFunction(s: string): never {
//   throw new Error(s);
// }

//// signature function

// var c: (x: number, y: string) => string;
// c = function (x: number, y: string): string {
//   return `${x}: ${y}`;
// };
// console.log(c(2, "javob"));
// c = function (a:number, b:number) :number {
//     return a + b;
// }

// console.log(c(1, "javob"));

// const add = (x: number, y: number): number => x + y;

// function log(x: number): void {
//   console.log(2);
// }

// add(1, 6);

//// overload function

// function overloadFunc(x: number, y: number): number;
// function overloadFunc(x: string, y: number): string;
// function overloadFunc(x: any, y: any): any {
//   if (typeof x === "number" && typeof y === "number") {
//     return 23 + 32;
//   } else {
//     `${32} ${24}`;
//   }
// }
// console.log(overloadFunc(1, 3));

// typescriptda tiplarni o`zgartirish va birlashtirish  uncnown type union types literal types optional properties and operators

// xafli usullar
// let a: any = 10;
// let b: number = a;

// // xafsiz usul;
// let c: unknown = 12.234;
// // let d: number = c;
// let e: number = <number> c;
// let f: number = c as number;
// (c as number).toFixed(1);
// (<number>c).toString(2);
// console.log(f);

// // union types

// let hash: number | string | boolean = 10;
// (hash = 12), (hash = "abc");
// hash = true;

// bu typega berilgan malumotlardan boshqa malumotlarni qabul qilmaydi
// literal types
// let s: "sm" | "md" | "lg";

// type aleases
// type Sizes = "Sm" | "Md" | "Lg";

// let s2: Sizes = "Sm";
// s2 = "Md";
// s2 = "Lg";
// let s3: Sizes = "Sm";

// console.log(s2);

// type OBJ = { name: string } | { age: number };
// let obj: OBJ;

// obj = { name: "Hasanboy", age: 21 };

// (obj = { name: "Husanboy" }), (obj = { age: 21 });

// obj = { name: "Husanboy", age: 32 };

// type OBJ2 = { name: string } & { age: number };
// let obj2: OBJ2;

// obj2 = { name: "Husanboy", age:23};
// obj2 = { name:"nimadir"};
// bu xato hisoblanadi
// obj2 = { age:23 };
// type OBJ3 = { name: string, age?: number};

// let obj3: OBJ3 = { name: "Husanboy"};
// obj3 = { name: "ibrohim", age:23};

// if ("age" in obj3) {
//     console.log("mavjud");

// } else {
//     console.log("mabjud emas");

// }

// const a = [];

// a = [1,"hfdj", undefined, "null"];
// let b: number[] = [1, 23];
// b = [12, 213];
//  let c:Array<number> = [23, 32];
//  let d: (number | string | boolean)[] = [234, `${a[0]} ${ a[1] } ${ a[2] }`, "qwere"];
//  let e: Array <number | boolean | string>

////    tuples are not supported; they are treated as arrays and converted to strings using the
////same format   as strings in  JavaScript arrays

// be free from other errors
// let f: [number, string];
// f = [12, "Hasanbos"];
// f = [23, " Have you checked your code  before running"];
//  bunday holatlarda xato chiqaradi ichida qancha va qanaqa type kiritilishiga qarab kiritiladi;
// f = ["Hasanbos", 123] f= ["Hasanbos", 123] f = ["Hasanbos"]; others

// enum Genders {
//   Male,
//   Female,
// }

// enum G {
//   A,
//   A2,
//   B = 10,
//   C,
// }

// console.log(G.A, G.B, G.C, G.A2);

// console.log(Genders.Male, Genders.Female);
// enum H {
//   A = "Hello",
//   B = "Additional",
//   C = "Preferred",
// }

// console.log(H.A, H.B, H.C);

// const enum I {
//     A,
//     B,
// }

// console.log(I.A, I.B);

// class Person {
//   _name: string = "John";
//   _age: number = 23;
//   _width: number = 157;
//   _Weight: number = 39;

//   constructor(name: string, age: number) {
//     this._name = name;
//     this._age = age;
// this._width = width;
// this._Weight = weight;
// }

// info(value: number): string {
//   return `${this._name}: ${this._age + value}da`;
// }

//   static isFailure = 56;
//   static discription(): string {
//     return `Bu Person oilasiga tegishli emas`;
//   }

//   get name(): string {
//     return this._name;
//   }

//   set name(value: string) {
//     this._name = value;
//   }

//   get age(): number {
//     return this._age;
//   }

//   set age(value: number) {
//     if (value > 0 && value < 100) {
//       this._age = value;
//     } else {
//       throw new Error("siz notog`i yosh kirittiz");
//     }
//   }
// }
// const Hasanboy: Person = new Person("Stive", 57);
// const Husanboy: Person = new Person("Vozniyak", 23);
// console.log(Hasanboy.info(32));
// console.log(Person.isFailure);
// console.log(Person.discription());
// console.log(Husanboy);
// console.log(Hasanboy._age);
// console.log(Hasanboy._age);
// Husanboy.age = -21;
// console.log(Hasanboy.age);
// if ({} instanceof Person) {
//   console.log("tegishli");
// } else {
//   console.log("tegishli emas");
// }


interface IPerson {
  _name?: string;
  _age?: number;
  seyHello() :string;
  
}



interface IPersonProps extends IPerson {
  _name?: string;
  _age?: number;
  seyHello() :string;
  
}



interface IPerson {
  _name?: string;
  _age?: number;
  seyHello() :string;
  
}
class Person implements IPerson {
  _name: string = "";
  _age: number = 0;
  constructor(name: string, age: number) {
    this._age = age;
    this._name = name;
  }

  seyHello(): string {
    return `Assalamu Alaykum Mening ismim ${this._name};
`;
  }
}

class Student extends Person {
  _group: string = "";
  _course: number = 0;

  constructor(name: string, age: number, group: string, course: number) {
    super(name, age);
    this._course = course;
    this._group = group;
  }

  seyHello(): string {
    const parentMethode = super.seyHello();
    return `${parentMethode} Men ${this._course}-kursning ${this._group} da tahsil olaman`;
  }
}

class Teacher extends Person {
  disclines: string[] = [];
  constructor(name: string, age: number, disclines: string[]) {
    super(name, age);
    this.disclines = disclines;
  }

  info() : string {
const parent = super.seyHello();
return `${parent}  Men  ${this.disclines[0]} dan dars beraman`;

  }
}    


const ibrohim: Person = new Person("Ibrohim", 23);
console.log(ibrohim);
console.log(ibrohim.seyHello());

const sardor: Student = new Student("Sardor", 23, "Frontend G18 Group", 27);
console.log(sardor);
console.log(sardor.seyHello());
const newSardor: Person = <Person>sardor;
console.log(newSardor);
console.log(newSardor.seyHello());

const abror: Teacher = new Teacher("Abror", 21, ["Frontend", "Backend"]);
console.log(abror.seyHello());
console.log(abror.info());




// export {};
