class PersonDb {
  constructor() {
    this.persons = [];
  }

  getAll() {
    return [...this.persons]
  }

  getById(personId) {
    return this.persons
      .find(item => item.getId() === personId) ?? null;
  }

  push(person) {
    this.persons.push(person);
    return person;
  }

  put(personId, { name, age, hobbies }) {
    const person = this.getById(personId);

    if (person) {
      person.setName(name);
      person.setAge(age);
      person.setHobbies([...hobbies]);

      return person;
    }

    return null;
  }

  delete(personId) {
    const person = this.getById(personId);

    if (person) {
      this.persons = this.persons.filter(({ id }) => id !== personId);

      return person;
    }

    return null;
  }
}

module.exports = {
  personDb: new PersonDb()
};
