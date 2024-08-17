const request = require('supertest');
var chai = require('chai');
chai.use(require('chai-json-schema'));
const fs = require('fs');

const assert = require('chai').assert;

describe('API test GET for "reqres.in"', () => {
    const LINK_URL_GET = "https://reqres.in/api/users?page=2"
    
  it('Test - GET List of Users', async () => {
    const response = await request(LINK_URL_GET)
    .get("users")
    
    //console.log(response.statusCode)
    //console.log(response.body)

    // assertion
    assert.equal(response.statusCode, 200)
    assert.equal(response.body.data[0].first_name, "Michael")

    
    const schemaPath = "resources/jsonSchema/get-users-schema.json"
    const jsonSchema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'))
    assert.jsonSchema(response.body, jsonSchema)

  }); 
});