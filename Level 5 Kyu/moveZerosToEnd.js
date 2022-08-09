//Write an algorithm that takes an array and moves all of the zeros to the end, 
//preserving the order of the other elements.



// Using two for loops
function moveZeros(arr) {
  //stores a zero count
  let zeroCount = 0;
  //creates a new array to push everything to
  let newArray = [];
  
  for(let i = 0; i < arr.length; i++) {
    //if current value is a zero, raise zero count and do nothing
    if(arr[i] === 0) 
      zeroCount++;
    //else, push value to new array
    else 
      newArray.push(arr[i]);
  }
  
  //add all the zeros to the end of new array and return it
  for(let i = 0; i < zeroCount; i++) {
    newArray.push(0);
  }
  
  return newArray;
}




//using filter and concat
function moveZeros(arr) {
  //filter array for non zeros and assign it to a variable
  let filteredList = arr.filter(function (num) {
    return num !== 0;
  });
  //filter array for zeros and assign to another variable
  let zeroList = arr.filter(function (num) {
    return num === 0;
  });
  //concat both arrays
  return filteredList.concat(zeroList);
}
