const supertest = require('supertest');
const server = require('../../app');

const host = 'localhost:3000'
const req = supertest(host);

const body = {
  name: 'John',
  age: 16,
  hobbies: []
};

let person;

describe('person', () => {
  it('get', async () => {
    const res = await req.get('/person');

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([])
  });

  it('post', async () => {
    const res = await req.post('/person')
      .set('Content-type', 'application/json')
      .send(JSON.stringify(body));

    person = res.body;

    expect(res.statusCode).toBe(201);
    expect(res.body.name).toEqual(body.name);
    expect(res.body.age).toEqual(body.age);
    expect(res.body.hobbies).toEqual(body.hobbies);
  });

  it('get by id', async () => {
    const res = await req.get(`/person/${person.id}`);

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(person);
  });

  afterAll(done => {
    server.close(done)
  })
});
