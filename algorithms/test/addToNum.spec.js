var assert = require('assert');
var chai = require('chai');
let addToNum = require('../addToNum');

// this function addToNum will add all the integers from 1 to num recursively

// addToNum(null) => null
// addToNum(0) => 0
// addToNum(1) => 1
// addToNum(2) => 3
// addToNum(3) => 6
// addToNum(4) => 10
// addToNum(5) => 15
// addToNum(6) => 21

describe ('addToNum', function(){
    context('number is less than 1', function(){
        it('should return 1 or 0 ', function(){
            assert.equal(addToNum(0), 0, "the function was passed 0")
        })
        
    })
    context('number is greater than 1', function(){
        it('should return null when pass null', function(){
            assert.equal(addToNum(null), null, "the function was passed null")
        })
        
    })
    context('number is greater than 1', function(){
        it('should return 1', function(){
            assert.equal(addToNum(1), 1, "the function was passed 1")
        })
        
        it('should return the right value input 2', function(){
            assert.equal(addToNum(2), 3, "the function was passed 1")
        })
        
        it('should return the right value input 3', function(){
            assert.equal(addToNum(3), 6, "the function was passed 1")
        })
        it('should return the right value input 4', function(){
            assert.equal(addToNum(4), 10, "the function was passed 1")
        })
    })
})