// let tuple: [number, string, boolean];
// tuple = [12, "Hasanxon kuchli inson", true];
// tuple.push(21);
// console.log(tuple);

// let result: bigint = 12324n;
// result = 12324n;
// console.log(result);

// function getData(name:string, age:number):string {
//     return name;
// }
// console.log();
// getData("Hasanxon kuchli inson", 21);

// type Lang = "English" | "Rus" | "Uzbek";
// type Datatype = { id: number; value: Lang }[]
// // type Func = function(title: string, age:number):void;
// let language: Lang = "Uzbek";

// let data: Datatype = [
//   { id: 1, value: "English" },
//   { id: 2, value: "Uzbek" },
//   { id: 3, value: "Rus" },
// ];

// data.map((lang) => {
//   language = lang.value;
// });

// interface Prop  {
//     id:number,
//     name:string,
//     value: Lang,
// }

type Base = {
  id?: number;
  name?: string;
  key?: string;
  age?: 21;
  title?: string;
  
};

type ListBase = {
  id: number;
  key: string;
  title: string;
  found?: number;
};

type TupleBase = {
id: number;
age: number;
key: string;
title: string;

}

const data: Base = {
  id: 1,
  key: "PDP",
  name: "Hasanxon",
};

const List: ListBase = {
  id: 1,
  key: "web",
  found: 1234,
  title: "Webrain academiya",
};

const tuple: Base = {
  id: 1,
  name: "Dilshodaxon",
  title: "Men sevgan sinfdoshim",
  age:21,
};

let array:[number, string] = [22, "Dilshodaxon"]

array.push("Dilshodaxon meni qadrdon sinfdoshim");

console.log(array);





export {};
