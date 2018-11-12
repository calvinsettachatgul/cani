var assert = require('assert');
var chai = require('chai');
var reverseString = require('../reverseString');

describe('#reverseString', function(){
    context('when null is passed as an argument', function(){
        it('should return null', function(){
          assert.equal(reverseString(null), null); 
        })
    })
    context('when a string of size 1 is an argument', function(){
        it('should return the string', function(){
          assert.equal(reverseString('a'), 'a'); 
        })
    })
    
    context('when a string of size greater than 1 is an argument', function(){
        it('should return the reverse of the string', function(){
          assert.equal(reverseString('ab'), 'ba'); 
        })
        
        it('should return the reverse of the string', function(){
          assert.equal(reverseString('abc'), 'cba'); 
        })
        it('should return the reverse of the string', function(){
          assert.equal(reverseString('calvin'), 'nivlac'); 
        })
    })
})