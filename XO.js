//Write a function that returns true if the number of x's and o's in a string are 
//equal. Function is case insensitive. 


function XO(str) {
    //code here
  //setting x and o counts to compare later
  let xCount = 0;
  let oCount = 0;
  //function is case insensitive
  str = str.toLowerCase();
  
  //looping through array to check for x's and o'x
  for(let i = 0; i < str.length; i++) {
    if(str.charAt(i) === "x") {
      xCount++;
    } else if(str.charAt(i) === "o") {
      oCount++;
    } else {
      continue;
    }
  }
  
  if(xCount === oCount) {
    return true;
  } else {
    return false;
  }
}