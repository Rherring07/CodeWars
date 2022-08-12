//Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid.
//The function should return true if the string is valid, and false if it's invalid.

//using a for loop and two counts
function validParentheses(parens) {
  // your code here ..
  // create two counts, one for left and one for right parentheses
  let leftCount = 0;
  let rightCount = 0;
  
  //turn string into an array for ease of checking contents
  let parensArray = parens.split("");
  
  //loop through the string and count each parentheses
  for(let i = 0; i < parensArray.length; i++) {
    if(rightCount > leftCount)
      return false;
  
    if(parensArray[i] === "(") 
      leftCount++;
    
    if(parensArray[i] === ")")
      rightCount++;
  }
  
  // compare counts and return false if they are different
  if(leftCount === rightCount) 
    return true;
  
  else
     return false;
}

//using for loop and one count
function validParentheses(parens){
  var count = 0;
  for (var i = 0; i < parens.length; i++) {
    if (parens[i] == '(') 
       count++;
    if (parens[i] == ')') 
       count--;
       
    if (count < 0) //if count is negative, there have been too many right parentheses before left parentheses
      return false;
  }
  
  return count == 0; // checks if count is zero and returns a boolean value
}
