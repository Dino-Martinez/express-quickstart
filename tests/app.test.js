const request = require('supertest')
const app = require('../app')

describe('Test app.js', () => {
  it('Should respond to the GET method', async () => {
    const response = await request(app).get('/')
    expect(response.statusCode).toBe(200)
  })
})
