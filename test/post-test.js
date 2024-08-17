const request = require('supertest');
var chai = require('chai');
chai.use(require('chai-json-schema'));
const fs = require('fs');

const assert = require('chai').assert;

describe('API test POST for "reqres.in"', () => {
    const LINK_URL_POST = "https://reqres.in/api/"
  
  it('Test - POST create users', async () => {
    const body = {
        "name": "bagas",
        "job": "leader"
    }
    const response = await request(LINK_URL_POST)
    .post("users")
    .send(body)

    //console.log(response.statusCode)
    //console.log(response.body)

    // assertion
    assert.equal(response.statusCode, 201)
    assert.equal(response.body.name, "bagas")  

    const schemaPath = "resources/jsonSchema/post-users-schema.json"
    const jsonSchema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'))
    assert.jsonSchema(response.body, jsonSchema)

  }); 
});