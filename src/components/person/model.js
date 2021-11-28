const { v4: uuid } = require('uuid');

class Person {
  constructor({ name = '', age = 0, hobbies = [] }) {
    this.id = uuid();
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getAge() {
    return this.age;
  }

  setAge(age) {
    this.age = age;
  }

  getHobbies() {
    return [...this.hobbies];
  }

  setHobbies(hobbies) {
    this.hobbies = [...hobbies];
  }
}

module.exports = {
  Person
};
