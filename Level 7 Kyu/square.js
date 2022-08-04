//check if n is a square number

//using for loop
var isSquare = function(n){
  
  if( n < 0) 
    return false;
  else if(n === 0) 
    return true;
  else {
    for(let i = 1; i*i <= n; i++) {
      if(i*i === n)
        return true;
    }
    return false;
  }
    
}

//using sqrt
var isSquare = function(n){
  return Math.sqrt(n) % 1 === 0 ? true : false;
}
