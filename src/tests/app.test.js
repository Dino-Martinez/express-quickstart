const chai = require('chai')
const assert = chai.assert
const chaiHttp = require('chai-http')
const app = require('../app')

// Configure chai
chai.use(chaiHttp)
chai.should()

describe('Test app.js', () => {
  it('Should respond to the GET method', async () => {
    const response = await chai.request(app).get('/')
    assert.strictEqual(response.statusCode, 200, 'Status was success')
  })
})
