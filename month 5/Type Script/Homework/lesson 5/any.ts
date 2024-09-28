// interface IUserService {
//   users: number;
//   getUserinDatabase(): number;
// }

// @CreatedAt
// class UserService implements IUserService {
//   users: number = 7;
//   getUserinDatabase(): number {
//     return this.users;
//   }
// }

// function CreatedAt<T extends { new (...args: any[]): {} }>(constructor: T) {
//   return class extends constructor {
//     CreatedAt = new Date().valueOf();
//   };
// }

// interface IcreatedatwithServices extends IUserService {
//   CreatedAt: number;
// }

// console.log(new UserService() as IcreatedatwithServices);

// abstract class ComptyuterFile {
//   abstract name: string;
//   abstract set size(value: number);
//   abstract get size(): number;
//   abstract show(): void;
// }

// class TextFile extends ComptyuterFile {
//   name: string;
//   size: number;

//   constructor(name: string, size: number) {
//     super();
//     this.name = name;
//     this.size = size;
//   }

//   show(): void {
//     console.log(this.size);
//   }
// }

// namespace Photos {
//   export class jpeg {}
//   export class png {}
// }

// module videoes {
//   export class Mp4 {}
//   export class Mp3 {}
// }

// function Person(name:string, age:number) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.greet = function() {
//   console.log("Hi, my name is " + this.name + " i`am "+ this.age + " years old");
// };

// let person1 = new Person("John", 21);
// person1.greet(); // "Hi, my name is John"

// function start() {
//   for (var i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log(i);
// }

// start();


export {};
