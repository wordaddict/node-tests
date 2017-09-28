const request = require('supertest');

const expect = require('expect');

var app = require('./server').app;

describe('Server', () => {

describe('GET /', () => {
  it('should return hello world response', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect(() => {

      })
      .end(done)
  });
})

describe('/GET /users', () => {
  it('should return a user in an array', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude(
            {
              name: 'Micheal',
              age: 22
            }
          )
        })
        .end(done);
  });
});


});
