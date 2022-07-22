function Person() {}
Person.prototype.name = "Jason";

console.log(Person.prototype.constructor === Person); // ✨true
