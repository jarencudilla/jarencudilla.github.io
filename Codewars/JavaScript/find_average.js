//8kyu Kata 
// Calculate average

// To calculate for the average I need to add everything in the array then divide the total from the length of the array. At first I thought it would just be a straight Math.avg() I've also seen solutions with reduce(), though it may produce a shorter code but I'm still not familiar. The shorter code, is not all the time the optimized code.

// Solution:

// function find_average(array) {
//   var avg = 0; 
//   for (var i = 0; i < array.length; i++) {
//   avg = avg + array[i];
//     }
//     return avg / array.length;
// }

// Test failed for array with 0 length

// Solution using reduce()

// function find_average(array) {
//   return array.reduce((a, b) => a + b) / array.length;
// }

// Test also failed for empty arrays Finally found a solution to an empty array! after checking if it's an array or not if it's empty or not I created a new array with [0] value

// if (array === undefined || array.length == 0 || array.length === 0 || array.length === NaN || !array)
//     array = [0];

// Fun times!

// Real solution :

function find_average(array) {
  if (array === undefined || array.length == 0 || array.length === 0 || array.length === NaN || !array)
  array = [0];
  var avg = 0; 
  for (var i = 0; i < array.length; i++) {
  avg = avg + array[i];
    }
    return avg / array.length;
}