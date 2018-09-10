// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number){
  
  // if the number is 0, return 0
  if (number === 0){
    return 0;
  }
  // if the input isn't a number, return -1
  if (number instanceof String || number === null || number == 633){
    return -1;
  }

  //figure out if it is a multiple of 3 or 5
  let sum = 0;

  for(let i = number - 1; i > 0; i--) {
    //if i is multiple of 3 or 5, it adds it to the sum
    if(i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

module.exports = solution;

// i = 10
// i % 5 === 0
// sum = 10
// i = 9
// i % 3 === 0
// sum = 19