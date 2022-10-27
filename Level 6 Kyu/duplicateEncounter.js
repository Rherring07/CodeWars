//The goal of this exercise is to convert a string to a new string where each character in the new string is "(" 
//if that character appears only once in the original string, or ")" if that character appears more than once in the original string. 
//Ignore capitalization when determining if a character is a duplicate.

//Examples
//"din"      =>  "((("
//"recede"   =>  "()()()"
//"Success"  =>  ")())())"
//"(( @"     =>  "))((" 

//using for loop 
function duplicateEncode(word){
    // ...
  //function ignores capitalization
  word = word.toLowerCase();
  //new string
  let str = "";
  //for each letter in the word, if word includes letter, add  ")"
 for(let i = 0; i < word.length; i++) {
   if(word.split(word[i]).length-1 > 1) 
     str += ")";
   else 
     str += "("
 }
  
  return str;
  //else add "("
}


//using map
function duplicateEncode(word){
    // ...
  word = word.toLowerCase();
  return word.split("").map((letter) => 
         word.indexOf(letter) === word.lastIndexOf(letter) ? "(" : ")"
      ).join("")
}
