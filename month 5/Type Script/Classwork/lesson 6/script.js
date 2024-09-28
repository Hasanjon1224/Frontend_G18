"use strict";
// class Person {
//   name: string;
// }
// const actor = new Person();
// actor.name = "John";
// namconsole.log(actor.name);
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.getName = function () {
        return this.name;
    };
    return MyClass;
}());
var c = new MyClass();
var g = c.getName;
console.log(g());
