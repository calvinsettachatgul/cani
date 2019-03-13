// from codewars

// Write a function called sumIntervals/sum_intervals() that accepts an array of intervals, and returns the sum of all the interval
//lengths. Overlapping intervals should only be counted once.

// Intervals
// Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

// Overlapping Intervals
// List containing overlapping intervals:

// [
// [1,4], //
// [7, 10], => 3
// [3, 5] // [1, 5] =>4
// ]
// The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.

// Examples:
// sumIntervals( [
// [1,2], => 1
// [6, 10], =>4
// [11, 15] => 4
// ] ); // => 9

// sumIntervals( [
// [1,4],
// [7, 10],
// [3, 5]
// ] ); // => 7

const sumIntervals = (arr1, arr2) => {
  return true  
}; 
const mergeIntervals = (arr1, arr2) => {
  return true  
}; 

// returns true of the 2 intervals overlap
const overlap = (arr1, arr2) => {
  let initial1 = arr1[0]
  let final1 = arr1[1]
  let initial2 = arr2[0]
  let final2 = arr2[1]
  // there are 4 types of overlap
  let overlap1 = initial1 >= initial2 && initial1 <= final2 // inital arr1 is between arr2
  let overlap2 = final1 >= initial2 && final1 <= final2 // final arr1 is between arr2
  let overlap3 = initial2 >= initial1 && initial2 <= final1 // inital arr2 is between arr1
  let overlap4 = final2 >= initial2 && final2 <= final1 // final arr2 is between arr1
  
  if (overlap1 || overlap2 || overlap3 || overlap4) {
    return true;
  }
   
  return false;
}; 

module.exports = {
    sumIntervals,
    overlap,
    mergeIntervals
}