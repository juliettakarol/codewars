// Write a function that takes an array of numbers and returns the sum 
// of the numbers.The numbers can be negative or non - integer.
// If the array does not contain any numbers then you should return 0.

// Sum Numbers
function sum (numbers) {
    "use strict";
  let sum = 0 
  numbers.forEach(item=>{
    if(typeof item === 'number')
    sum+=item
  })
    return sum
    
};

console.log(sum([1, 5.2, 4, 0, -1]))