"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(name, age, adress) {
        this.name = name;
        this.age = age;
        this.adress = adress;
    }
}
const Hun = new Human("seunghun", 22, "Seoul");
const introduce = (Human) => {
    return `i'm ${Human.name}, i'm ${Human.age} and i live in ${Human.adress}`;
};
console.log(introduce(Hun));
//# sourceMappingURL=index._02.js.map