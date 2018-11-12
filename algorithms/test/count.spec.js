var assert = require('assert');
var chai = require('chai');
let count = require('../count');

// write a spec that verifies count will sum all the elements of an array and return the sum
describe('#count', function() {
    context('when null is an argument', function(){
        it('should return 0', function(){
            assert.equal(count(null), 0, "the function was passed null")
        })
    })
    context('when [] is an argument', function(){
        it('should return 0', function(){
            assert.equal(count([]), 0, "the function was passed empty array")
        })
    })
    it('should return sum of the array elements', function(){
        assert.equal(count([1,2,3]), 6, "this works")
    })
})