//Complete the solution so that the function will break up camel casing, using a space between words.





//using basic for loop
// complete the function
function solution(string) {
  let newString = "";
    for(let i = 0; i < string.length; i++) {
      if(string.charAt(i) >= "A" && string.charAt(i) <= "Z") {
        newString += " " + string.charAt(i);
      } else {
        newString += string.charAt(i);
      }
    }
  return newString;
}



//uaing regExp
// complete the function
function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));

}





//using map
function solution(string) {
  string = string.split('').map(function (el) {
    if (el === el.toUpperCase()) {
      el = ' ' + el
    }
    return el
  })
  return string.join('')
}
