// test for merge_sort.js
const assert = require('assert');
const chai = require('chai');
const mergeSort = require('../merge_sort');

describe('#mergeSort', function() {
    context('array is empty', function(){
        it('should return []', function(){
            let my_arr = [];
            assert.equal((mergeSort(my_arr)), my_arr, "the function was passed empty array")
        })
    })
    // size of 1 
    // size of 5
    // size of 10
    // size of null input
})