/* You are given a number of sticks of varying lengths. You will iteratively cut the sticks into smaller sticks, 
discarding the shortest pieces until there are none left. At each iteration you will determine the length of the 
shortest stick remaining, cut that length from each of the longer sticks and then discard all the pieces of that 
shortest length. When all the remaining sticks are the same length, they cannot be shortened so discard them.
Given the lengths of some number of sticks, return an array containg the numbers of sticks remaing before each cut was made.

If any input is provided other than an array you should return an empty array because no sticks were ever there.

For example, 
provided an array such as: [5,4,4,2,2,8]
we would expect: [6,4,2,1]
explanation:
stick lengths     length of cut     sticks before cut
5 4 4 2 2 8         2                 6
3 2 2 - - 6         2                 4
1 - - - - 4         1                 2
- - - - - 3         3                 1
- - - - - -         done              done
*/
function solution(arr){
  let sol = [];
  let smallest = 0;
  let numSticks = 1;

  // if any input is provided other than an array we return an empty array
  if(arr === null || arr === undefined || arr.length <= 2){
    return sol
  }

  else{

    // while we still have sticks remaining
    while(arr.length > 0){

      // reset variables
      smallest = 0;
      numSticks = 1;

      // add the current number of sticks in the array to the solution
      sol.push(arr.length);

      // first we find the shortest stick length in the array
        for(let i = 0; i < arr.length; i++){

          // we say the first one's the smallest
            if(i == 0){
              smallest = arr[0];
            }

            // then we compare the smallest to each one after that
            if(arr[i] < smallest) {
              smallest = arr[i];
              numSticks++;
            }
        }

        // now we have to remove all the sticks from the array that have that length
        // this is resizing the array as well
        for( let i = arr.length-1 ; i >= 0; i-- ){
          if ( arr[i] === smallest) arr.splice(i, 1);
        }
    }
    return sol;
  }
}

module.exports = solution;
