"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    name: "Seunghun",
    age: 22,
    adress: "seoul"
};
const introduce = (person) => {
    return `i'm ${person.name}, my favorite color is ${person.age}, and i live in ${person.adress}!`;
};
console.log(introduce(person));
//# sourceMappingURL=index.js.map