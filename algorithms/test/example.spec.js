var assert = require('assert');
var chai = require('chai');
let example = require('../example');


describe ('example', function(){
    context('when successful', function(){
        it('should return true', function(){
            assert.equal(example(), true, "the function worked!")
        })
        
    })
})