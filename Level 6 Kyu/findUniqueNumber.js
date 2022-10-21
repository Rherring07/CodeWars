//There is an array with some numbers. All numbers are equal except for one. Try to find it!

//brute force
function findUniq(arr) {
  // do magic
  let value1, value2;
  value1 = arr[0];
  
  for(let i = 1; i < arr.length; i++) {
    value2 = arr[i];
    
    if(value1 !== value2 && i !== arr.length-1) 
     return (value1 === arr[i+1] ? value2 : value1);
    else if(value1 !== value2 && i === arr.length-1)
     return (value1 === arr[i-2] ? value2 : value1);
    
    value1 = arr[i];
  }
}


//sort, very slow
function findUniq(arr) {
  arr.sort((a,b)=>a-b);
  return arr[0]==arr[1]?arr.pop():arr[0]
}

//using findIndex and lasIndexOf, also slow
function findUniq(arr) {
  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}
