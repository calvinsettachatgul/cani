var assert = require('assert');
var chai = require('chai');
let {mergeIntervals, sumIntervals, overlap} = require('../sum_intervals');


describe.only('overlap', function(){
    context('overlap is working', function(){
        it('should return true when 2 intervals overlap', function(){
            assert.equal(overlap([1, 5], [4, 6]), true, "the function worked!")
            assert.equal(overlap([4, 6], [1, 5]), true, "the function worked!")
            assert.equal(overlap([1, 10], [3, 5]), true, "the function worked!")
            assert.equal(overlap([5, 6], [1, 10]), true, "the function worked!")
        })
        it('should return false when 2 intervals do not overlap', function(){
            assert.equal( overlap([1, 3], [4, 8]), false, "the function worked!")
        })
        
    })
})