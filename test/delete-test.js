const request = require('supertest');
const assert = require('chai').assert;

describe('API test DELETE for "reqres.in"', () => {
    const LINK_URL_DELETE = "https://reqres.in/api/users/2"
    
  it('Test - DELETE of Users', async () => {
    const response = await request(LINK_URL_DELETE)
    .delete("users")
    
    //console.log(response.statusCode)

    // assertion
    assert.equal(response.statusCode, 204) 

  }); 
});