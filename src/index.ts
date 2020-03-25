interface Human {
    name:string;
    age:number;
    adress:string;
}


const person = {
     name: "Seunghun",
      age: 22,
      adress : "seoul"
};

      const introduce = (person: Human):string => {
          return `i'm ${person.name}, my favorite color is ${person.age}, and i live in ${person.adress}!`;
      };

      console.log(introduce(person));

export{};



