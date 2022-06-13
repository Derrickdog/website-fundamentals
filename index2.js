// Object Constructors
function Book(title, author, numPages, haveRead){
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.haveRead = haveRead;
    this.info = function() {
        let haveReadString;
        if(haveRead)
            haveReadString = "read";
        else
            haveReadString = "not read yet";
        return title + " by " + author + ", " + numPages + " pages, " + haveReadString;
    }
}

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
console.log(book1.info());

// Prototypes
function Student(name, grade){
    this.name = name;
    this.grade = grade;
}

Student.prototype.sayName = function() {
    console.log(this.name);
}
Student.prototype.goToProm = function(){
    console.log("Want to go to prom with me?");
}

const student1 = new Student("Derrick", 12);
student1.goToProm();

// Create Prototype
function SeventhGrader(name) {
    this.name = name;
    this.grade = 7;
}

SeventhGrader.prototype = Object.create(Student.prototype);

const carl = new SeventhGrader("Carl");
carl.sayName();
console.log(carl.grade);

// Factory Function
const personFactory = (name, age) => {
    const sayHello = () => console.log("hello!");
    return {name, age, sayHello};
};

const jeff = personFactory("jeff", 27);

jeff.sayHello();

// Closure
const FactoryFunction = string => {
    const capitalizeString = () => string.toUpperCase();
    const printString = () => console.log(`----${capitalizeString()}----`);
    return { printString };
  };
  
  const taco = FactoryFunction('taco');
  
  //printString(); // ERROR!!
  //capitalizeString(); // ERROR!!
  //taco.capitalizeString(); // ERROR!!
  taco.printString(); // this prints "----TACO----"

  // Game
  const Player = (name, level) => {
    let health = level * 2;
    const getLevel = () => level;
    const getName  = () => name;
    const die = () => {
      // uh oh
    };
    const damage = x => {
      health -= x;
      if (health <= 0) {
        die();
      }
    };
    const attack = enemy => {
      if (level < enemy.getLevel()) {
        damage(1);
        console.log(`${enemy.getName()} has damaged ${name}`);
      }
      if (level >= enemy.getLevel()) {
        enemy.damage(1);
        console.log(`${name} has damaged ${enemy.getName()}`);
      }
    };
    return {attack, damage, getLevel, getName};
  };
  
  const jimmie = Player('jim', 10);
  const badGuy = Player('jeff', 5);
  jimmie.attack(badGuy);

  // Inheritance
  const Person = (name) => {
    const sayName = () => console.log(`my name is ${name}`);
    return {sayName};
  }
  
  const Nerd = (name) => {
    // simply create a person and pull out the sayName function with destructuring assignment syntax!
    const {sayName} = Person(name);
    const doSomethingNerdy = () => console.log('nerd stuff');
    return {sayName, doSomethingNerdy};
  }
  
  const jeffy = Nerd('jeff');
  
  jeffy.sayName(); //my name is jeff
  jeffy.doSomethingNerdy(); // nerd stuff

  // Module
  const calculator = (() => {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
    return {
      add,
      sub,
      mul,
      div,
    };
  })();
  
  calculator.add(3,5); // 8
  calculator.sub(6,2); // 4
  calculator.mul(14,5534); // 77476