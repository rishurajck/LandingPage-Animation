const person = {
  name: "Amit",
  greet: function () {
    return Hello, `${this.name}`;
  },
};

const anotherPerson = { name: "Rahul" };

console.log(person.greet());
console.log(person.greet.call(anotherPerson));
console.log(person.greet.call());
