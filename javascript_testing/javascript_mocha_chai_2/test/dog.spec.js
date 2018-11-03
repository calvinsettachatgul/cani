var assert = require('assert');
var chai = require('chai');
let Dog = require('../dog');

// console.log(Dog);

describe('#Dog constructor', function(){
    //it should have a name property 
    it('should create a dog with a name and an age',function(){
        let testDog = new Dog("testname", 5);
        assert.equal(testDog.name, "testname", "the dog has the right name");
        assert.equal(testDog.age, 5);
    })
    it('should create a dog with an age',function(){
        let testDog = new Dog("testname", 5);
        assert.equal(testDog.age, 5);
    })
})