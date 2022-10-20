// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal 
// to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.


function findEvenIndex(arr)
{
  //brute force method 
  
  //run a for loop
  for(let i = 0; i < arr.length; i++) {
   //reduce both sides of array and compare values
    let sum1 = arr.slice(0, i).reduce((iV, acc) => iV + acc, 0);
    let sum2 = arr.slice(i+1,arr.length).reduce((iV, acc) => iV + acc, 0);
    
    //if values are equal, return i
    if(sum1 === sum2)
      return i;
  }
  
  //if loop finishes, no value found
  //return -1
  
  return -1;
}


//method 2
//don't need to reduce every time

function findEvenIndex(arr)
{
  let sum1 = 0;
  let sum2 = arr.reduce((iV, acc) => iV + acc, 0);
  
  for(let i = 0; i < arr.length; i++) {
    sum2 -= arr[i];
    if(sum1 === sum2)
      return i;
    else {
      sum1 += arr[i];
    }
  }
  return -1;
}
