import { v4 as uuid } from 'uuid';

class Person {
  constructor(name = '', age = 0, hobbies = []) {
    this._id = uuid();
    this._name = name;
    this._age = age;
    this._hobbies = hobbies;
  }

  getId() {
    return this._id;
  }

  getName() {
    return this._name;
  }

  setName(name) {
    this._name = name;
  }

  getAge() {
    return this._age;
  }

  setAge(age) {
    this._age = age;
  }

  getHobbies() {
    return [...this._hobbies];
  }

  setHobbies(hobbies) {
    this._hobbies = [...hobbies];
  }
}

module.exports = {
  Person
};
