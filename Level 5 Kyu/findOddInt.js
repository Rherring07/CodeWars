//Given an array of integers, find the one that appears an odd number of times.
//There will always be only one integer that appears an odd number of times.

//Very Messy for loop
function findOdd(A) {
  //happy coding!
  if( A.length === 1) {
    return A[0];
  }
  //make a count variable to count how many times an integer appears
  let count = 1;
  
  //sort the array in ascending order for ease of counting
  A.sort();
  
  //run a loop 
  for(let i = 1; i < A.length; i++) {
    
    if(i === A.length - 1) {
      return A[i];
    }

    //if integer is different from previous in sorted array
    if(A[i] !== A[i - 1]) {
      //AND count is odd, return previous number
        if(count % 2 === 1)
          return A[i - 1];
      //if count is not odd, restart count;
        else 
          count = 1;
    }
    else
      count++;
  }
  return 1;
}



