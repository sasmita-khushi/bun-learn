class Animal {
  constructor(type) {
    this.type = type;
  }
  makeSound() {
    console.log("Making sound");
  }
  run() {
    console.log("Running");
  }
}

class Dog extends Animal {
  constructor(name) {
    super("Dog");
    this.name = name;
  }
  eat() {
    console.log("Eating");
  }
  run() {
    console.log("Running faster");
  }
}

let d = new Dog("Tommy");
console.log(d.type);
console.log(d.name);
d.run();
