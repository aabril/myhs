const request = require('supertest');
const app = require('../app.js');

describe('GET /', () => {
  it('should return 200 OK', (done) => {
    request(app)
      .get('/')
      .expect(200, done);
  });
});

describe('GET /login', () => {
  it('should return 200 OK', (done) => {
    request(app)
      .get('/login')
      .expect(200, done);
  });
});

describe('GET /signup', () => {
  it('should return 200 OK', (done) => {
    request(app)
      .get('/signup')
      .expect(200, done);
  });
});

describe('GET /example', () => {
  it('should return 200 OK', (done) => {
    request(app)
      .get('/api')
      .expect(200, done);
  });
});

describe('GET /contact', () => {
  it('should return 200 OK', (done) => {
    request(app)
      .get('/contact')
      .expect(200, done);
  });
});

describe('GET /example/lastfm', () => {
  it('should return 200 OK', (done) => {
    request(app)
      .get('/example/lastfm')
      .expect(200, done);
  });
});

describe('GET /example/twilio', () => {
  it('should return 200 OK', (done) => {
    request(app)
      .get('/example/twilio')
      .expect(200, done);
  });
});

describe('GET /example/stripe', () => {
  it('should return 200 OK', (done) => {
    request(app)
      .get('/example/stripe')
      .expect(200, done);
  });
});

describe('GET /example/scraping', () => {
  it('should return 200 OK', (done) => {
    request(app)
      .get('/example/scraping')
      .expect(200, done);
  });
});

describe('GET /example/lob', () => {
  it('should return 200 OK', (done) => {
    request(app)
      .get('/example/lob')
      .expect(200, done);
  });
});

describe('GET /example/aviary', () => {
  it('should return 200 OK', (done) => {
    request(app)
      .get('/example/aviary')
      .expect(200, done);
  });
});

describe('GET /example/clockwork', () => {
  it('should return 200 OK', (done) => {
    request(app)
      .get('/example/clockwork')
      .expect(200, done);
  });
});

describe('GET /example/upload', () => {
  it('should return 200 OK', (done) => {
    request(app)
      .get('/example/upload')
      .expect(200, done);
  });
});

describe('GET /random-url', () => {
  it('should return 404', (done) => {
    request(app)
      .get('/reset')
      .expect(404, done);
  });
});
