// function add(x: number, y: number, clb?: (v: number) => void): number {
//   let natija: number = x + y;
//   if (clb) {
//     clb(natija);
//   }
//   return natija;
// }

// // const result: number = add(3, 4, (r) => console.log("natija", r));

// // console.log("result:", result);

// type Arr = ({ price: number } | null | undefined)[];
// function calcProductPrice(arr: Arr): number {
//   let s: number = 0;
//   arr.forEach((item) => {
//     s += item?.price ?? 0;
//   });
//   return s;
// }

// const result: number = calcProductPrice([
//   { price: 1 },
//   null,
//   { price: 2 },
//   undefined,
//   { price: 3 },
//   null,
//   { price: 4 },
//   undefined,

//   { price: 5 },
// ]);
// interface iProduct {
//   name: string;
//   weight?: number;
// }
// function calcProductWeight(products: iProduct[]): number {
//   let totalWeight: number = 0;
//   products.forEach((product) => {
//     totalWeight += product.weight!;
//   });
//   return totalWeight;
// }

// const qoshish: number = calcProductWeight([
//   { name: "Product 1", weight: 1 },
//   { name: "product 2", weight: 2 },
//   { name: "Product 3", weight: 3 },
//   { name: "Product 4", weight: 4 },
// ]);

// console.log(qoshish);

// let a: number | undefined | null = null;

// setTimeout(() => {
//   a = 20;
// }, 500);

// setTimeout(() => {
//   let b: number = a!;
//   console.log(b);
// }, 1000);
// let s: string;
// console.log(s!);

// class FrontendDeveloper {
//   isCreateRestApi: boolean = false;

//   createRestApi() {};
// }

// class BackendDeveloper {
// isCreateRestApi: boolean = true;
// }

// function isBachgroundDeveloper(develoer:any) : develoer is BackendDeveloper{
//     return develoer.isCreateRestApi;
// }

// function writeCode(develoer:BackendDeveloper | FrontendDeveloper) {

//     if (isBachgroundDeveloper(develoer)) {
//         develoer.isCreateRestApi;
//     }
// }

// interface IUserService {
//   users: number;
//   getUserCounts(): number;
// }

// @setUserAdvanced({ text: "text1", users: 3 })
// @setUserAdvanced({ text: "text2", users: 2 })
// // @setUserAdvanced(3)
// @sevenUsers
// @nullUserAdvanced
// class UserService implements IUserService {
//   // @ts-ignore
//   users: number;
//   getUserCounts(): number {
//     return this.users;
//   }
// }

// function sevenUsers(target: Function) {
//   target.prototype.users = 7;
//   //   return target;
// }

// function setUsers(users: number) {
//   return (target: Function) => {
//     target.prototype.users = users;
//   };
// }

// function nullUserAdvanced<T extends { new (...args: any[]): {} }>(
//   constructor: T
// ) {
//   return class extends constructor {
//     users = 0;

//     getUsercounts(): number {
//       return this.users + 12;
//     }
//   };
// }

// function setUserAdvanced(obj: { text: string; users: number }) {
//   console.log(obj.text, "initialized", obj.users);

//   return <T extends { new (...args: any[]): {} }>(constructor: T) => {
//     console.log(obj.text, "run", obj.users);

//     return class extends constructor {
//       users = obj.users;

//       getUsercounts() {
//         this.users + 12;
//       }
//     };
//   };
// }

// console.log(new UserService().getUserCounts());
// console.log(typeof UserService);

// function loggerUsers(obj: IUserService): IUserService {
//   console.log("user count", obj.users);
//   return obj;
// }

// console.log(new UserService().getUserCounts());
// console.log(sevenUsers(new UserService()).getUserCounts());
// console.log(loggerUsers(sevenUsers(new UserService())).getUserCounts());


