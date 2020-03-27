class Human {
 public name: string;
 public age: number;
 public adress: string;
 constructor(name: string, age: number, adress: string){
     this.name = name;
     this.age = age;
     this.adress = adress;
 }
}

const Hun = new Human("seunghun", 22, "Seoul");

const introduce = (Human) =>{
   return `i'm ${Human.name}, i'm ${Human.age} and i live in ${Human.adress}`;
};

console.log(introduce(Hun));

export{};