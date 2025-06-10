const { expect } = require('chai');
const request = require('supertest');
const { server, welcomeMessage } = require('../index');

describe('Node.js Server', () => {
  after(() => {
    // Close the server after tests
    server.close();
  });

  it('should return the correct welcome message', async () => {
    const response = await request(server).get('/');
    expect(response.status).to.equal(200);
    expect(response.text).to.equal('welcome my node.js');
  });

  it('should have the welcome message set correctly', () => {
    expect(welcomeMessage).to.equal('welcome my node.js');
  });
});