export {};
// type A<T> = T extends T ? string : never;
// // type A<T extends string> = T;
// type B = A<string>;
// type C = A<"Js">;
// type D = A<number>;

// function getName<T extends { name: string }>(person: T): void {
//    console.log(person.name);
// }

// getName({name:"Hasanxon", age:23});

// interface Iname {
//   name: string;
// }

// function getName<T extends Iname>(person: T): void {
//   console.log(person.name);
// }

// getName({ name: "Ismoil" });

// interface Inter {
//   a: string;
//   b: boolean;
//   c: number;
// }

// type InterKeys = keyof Inter;
// function getProperty<ObjType, ObjKey extends keyof ObjType>(
//   obj: ObjType,
//   key: ObjKey
// ) {
//   return obj[key];
// }

// const result = getProperty(
//   { name: "Hasanxon", age: 23, lastName: "Do`stmatov" },
//   "lastName"
// );

// type Person1 = { name: string; age: number };

// type Person2 = Partial<Person1>;
// type MyPartial<T> = {
//   [P in keyof T]?: T[P];
// };

// type Person3 = MyPartial<Person1>;

// type Animal1 = { name?: string; age?: number };
// type Animal2 = Required<Animal1>;
// type MyRequired<T> = { [P in keyof T]-?: T[P] };
// type Animal3 = MyRequired<Animal1>;

// type Color1 = string | number | boolean | null | undefined;

// type Color2 = NonNullable<Color1>;

// type MYNonNullable<T> = T extends null | undefined ? never : T;

// type Color3 = MYNonNullable<Color1>;

// type Dimensions = { width: number; height: number; length: number };
// type Dimensions2 = Record<"width" | "height" | "length", number | string>;

// type MyRecord<K extends string | number | symbol, T> = {[P in K]:T};

// type MyRecord<K extends keyof any, T> = { [P in K]: T };
// type Dimensions3 = MyRecord<"width" | "height" | "length", number>;

// type Article1 = { title: string; page: number };

// const article1: Article1 = { title: "Article 2", page: 1 };

// article1.title = "Article 2";

// type Article2 = Readonly<Article1>;
// const article2: Article2 = { title: "Maqola 2", page: 2 };

// type Myreadonly<T> = { readonly [P in keyof T]: T[P] };

// type Article3 = Myreadonly<Article1>;

// const article3: Article3 = { title: "Article 1", page: 1 };

// article3.page = "Article";

// const article4 = { title: "Article 4", page: 5, readonly: true } as const;
//  article4.title = "Article 4";
// const Article5 = <const>{ title: "Article 5", page: 6, readonly: false };

//  Article5.title = "Article" ;

// type Article1 = { title: string; page: number };

// type articles1 = Array<Article3>;
// type Articles2 = ReadonlyArray<Article3>;

// const articles2: Articles2 = [
//   { title: "Article 1", page: 1 },
//   { title: "Article 2", page: 2 },
// ];

// articles1.push({ title:"Hasanjon", page: 3});

// function f1(arr: ReadonlyArray<string>) {}
// function f2(arr: readonly string[]) {}

// type MyPick<T, K extends keyof T> = { [P in K]: T[P] };

// type Vector1 = { x: number; y: number; z: number };
// type Vector2 = Pick<Vector1, "x" | "y">;
// type Vector3 = MyPick<Vector1, "x" | "z">;

// type Vector2 = {
//   x: number;
//   y: number;
// }

// type A = string | number | boolean;
// type B = string | boolean;

// type C = Extract<A, B>;
// type MyExtract<T, U> = T extends U ? T : never;
// type D = MyExtract<A, B>;

// type E = Exclude<A, B>;
// type MyExclude<T, U> = T extends U ? T : never;
// // console.log();

// type F = MyExclude<A, B>;

// type Person = { name: string; age: number; weight: number; height: number };
// type Person4 = Omit<Person, "weight" | "height">;

// type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

// type Person7 = MyOmit<Person, "name" | "age">;

// function functionf1(x: string, y: number): boolean {
//   return x.length > y.toString().length;
// }

// type A = typeof functionf1;
// type B = Parameters<A>;

// type MyParemeter<T extends (...arg:any) => any> =T extends (...arg:infer U) => any ? U : any;

// type B2 = MyParemeter<A>;

// class Class1 {
//   a: number;
//   b: string;

//   constructor(a: number, b: string) {
//     this.a = a;
//     this.b = b;
//   }
// }

// type C = typeof Class1;
//  type D =  ConstructorParemeters<C>;
// interface Car {
//   name: string;
//   color: string;
//   isBallon: number;
//   speed: speedCar;
// }

// interface speedCar {
//   max: number;
//   min: number;
// }

// interface PriceCar {
//   total: string;
//   credit: string;
//   disCountry: number;
// }

// type actionType = "show" | "hide";
// function logger(action: actionType): 1 | -1 {
//   switch (action) {
//     case "show":
//       return 1;
//     case "hide":
//       return 1;
//   }
// }

// enum Dictionary {
//   rus,
//   en,
//   uz,
// }

// const runEnum = (): number => {
//   return 2;
// };

// enum discussions {
//   Yes = 1,
//   No = runEnum(),
// }

// class Car <T> {
//   data: T;
// }

// abstract class ComputerFfiles {
//   abstract name: string;
//   abstract set size(value: number);
//   abstract get size(): number;
//   abstract show(): void;
// }

// class TextFile extends ComputerFfiles {
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
//     export class Png{};
//     export class Image{};
// }

// module  Photosm{
// export class PngP{};
// export class Image{};
// }
// console.log(Number.MAX_VALUE);
// console.log(Number.MAX_SAFE_INTEGER);

// let n: bigint =
//   109876543234567898765432456788765432456787654324567865435678876546545678909878999990987898987876554545546n;

// console.log(n);

// const a: bigint = BigInt(12);
// console.log(a);

// let a: number| null | undefined  = null

// a =  undefined;
// a = 67
// let b = a ?? 0;

// console.log(b);

// interface User {
//     name: string;
//     age: number;
//     email: string;
//   }
  
//   let partialUser: Partial<User> = {
//     name: "Ali", // faqat name bo'lishi ham mumkin
//     age: 12,
//     email: "ali@gmail.com",
//   };


interface User {
    name: string;
    age: number; // majburiy emas
  }
  
  let requiredUser: Required<User> = {
    name: "Ali",
    age: 25// endi age ham majburiy
  };
  

  
  