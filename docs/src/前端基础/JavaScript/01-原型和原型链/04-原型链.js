function Person() {}
Person.prototype.name = "Jason";

const person = new Person();
person.name = "Albom";

console.log(person.name); // ✨Albom
delete person.name;
console.log(person.name); // ✨Jason

console.log(Person.prototype.__proto__ === Object.prototype); // ✨true
console.log(Object.prototype.__proto__); // ✨null
console.log(Object.getPrototypeOf(person) === Person.prototype); // ✨true
