/*
An array is said to be hollow if it contains 3 or more 0s in the middle 
that are preceded and followed by the same number of non-zero elements. 
Furthermore, all the zeroes in the array must be in the middle of the array.

Write a function named isHollow/is_hollow/IsHollow that accepts 
an integer array and returns true if it is a hollow array, else false.
*/


// Solution

function isHollow(x){
  return /^(1*)0{3,}\1$/.test(x.map(x=>x?1:0).join(''))
}

// or

function isHollow(x){
  while(x.length >= 3 && x[0] != 0 && x[x.length-1] != 0){
    x.shift();
    x.pop();
  }
  return /^[0]{3,}$/g.test(x.join(''));
}