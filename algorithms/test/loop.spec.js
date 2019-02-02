var assert = require('assert');
var chai = require('chai');
let { loopIterate, loopRecurse } = require('../loop');

describe.only('loopIterate', function(){
    context('when successful', function(){
        it('should iterate through the array', function(){
            assert.equal(loopIterate([1,2,3,4]), null, "the function worked!")
        })
    })
    context('when successful', function(){
        it('should iterate through the array', function(){
            assert.equal(loopRecurse([1,2,3,4]), null, "the function worked!")
        });
    });
});