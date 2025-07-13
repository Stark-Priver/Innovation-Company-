const axios = require('axios');
const http = require('http');
const app = require('../server'); // Assuming your express app is exported from server.js
const db = require('../models');
const { User } = db;

let server;
const api = axios.create({
  baseURL: `http://localhost:${process.env.PORT || 5000}/api/auth`,
});

describe('Auth API', () => {
  beforeAll((done) => {
    server = http.createServer(app);
    server.listen(done);
    db.sequelize.sync({ force: true });
  });

  afterAll((done) => {
    db.sequelize.close();
    server.close(done);
  });

  it('should register a new user', async () => {
    const res = await api.post('/register', {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      password: 'password123',
      role: 'client',
    });
    expect(res.status).toBe(200);
    expect(res.data).toHaveProperty('token');
  });

  it('should not register a user with an existing email', async () => {
    try {
      await api.post('/register', {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        password: 'password123',
        role: 'client',
      });
    } catch (err) {
      expect(err.response.status).toBe(400);
      expect(err.response.data).toHaveProperty('msg', 'User already exists');
    }
  });

  it('should login an existing user', async () => {
    const res = await api.post('/login', {
      email: 'john.doe@example.com',
      password: 'password123',
    });
    expect(res.status).toBe(200);
    expect(res.data).toHaveProperty('token');
  });

  it('should not login a user with incorrect credentials', async () => {
    try {
      await api.post('/login', {
        email: 'john.doe@example.com',
        password: 'wrongpassword',
      });
    } catch (err) {
      expect(err.response.status).toBe(400);
      expect(err.response.data).toHaveProperty('msg', 'Invalid credentials');
    }
  });
});
