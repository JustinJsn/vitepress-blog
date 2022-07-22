function Person() {}
Person.prototype.name = "Jason";

const person = new Person();
console.log(person.__proto__ === Person.prototype); // ✨true
