//turn a string into a pigLatin string

function pigIt(str){
  //Code here
  let strArray = str.split(" ");
  
  for(let i = 0; i < strArray.length; i++) {
  //check if string ends in a punctuation mark, don't pig latin it
    if(strArray[i].startsWith("!") === true || strArray[i].startsWith("?") === true || strArray[i].startsWith(".") === true) {
      continue;
    } else 
    strArray[i] = strArray[i].slice(1) + strArray[i].charAt(0) + "ay"
  }
  
  return strArray.join(" ");
}
