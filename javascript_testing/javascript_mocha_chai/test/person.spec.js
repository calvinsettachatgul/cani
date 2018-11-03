var assert = require('assert');
var Person = require('../person')
describe('Person', function() {
  describe('#creation', function() {
    it('should create a person with first and last name values', function(){
      // console.log(Person)
      let testPerson = new Person('testFirst', 'testLast')
      assert.equal(testPerson.first, 'testFirst' )
      assert.equal(testPerson.last,'testLast')
    });
  });
});