const request = require('supertest');
var chai = require('chai');
chai.use(require('chai-json-schema'));
const fs = require('fs');

const assert = require('chai').assert;

describe('API test PUT for "reqres.in"', () => {
    const LINK_URL_POST = "https://reqres.in/api/users/2"
  
  it('Test - PUT update users', async () => {
    const body = {
        "name": "aji",
        "job": "zion resident"
    }
    const response = await request(LINK_URL_POST)
    .put("users")
    .send(body)

    //console.log(response.statusCode)
    //console.log(response.body)

    // assertion
    assert.equal(response.statusCode, 200)
    assert.equal(response.body.name, "aji")  

    const schemaPath = "resources/jsonSchema/put-users-schema.json"
    const jsonSchema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'))
    assert.jsonSchema(response.body, jsonSchema)

  }); 
});