//create a function that returns a string without vowels.
//Example: "Hello World" becomes "Hll Wrld"


//using regExp
function disemvowel(str) {
 
  return str.replace(/[aeiou]/ig,'');
  
}

//Without regExp
function disemvowel(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  
  return str.split('').filter(function(el) {
    return vowels.indexOf(el.toLowerCase()) == -1;
  }).join('');

}
