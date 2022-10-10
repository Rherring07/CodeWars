// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.


//first attempt
function high(x){
  
  let strArray = x.split(" ");
  let valueArray = strArray.map(str => turnStringToValue(str));
  
  return strArray[valueArray.indexOf(Math.max(...valueArray))]
  
  
  function turnStringToValue(str) {
     const LETTER_VALUE_MAP = {
      "a" : 1, "b" : 2, "c" : 3, "d" : 4, "e" : 5, "f" : 6, "g" : 7, "h" : 8, "i" : 9, "j" : 10, "k" : 11,
      "l" : 12, "m" : 13, "n" : 14, "o" : 15, "p" : 16, "q" : 17, "r" : 18, "s" : 19, "t" : 20, "u" : 21,
      "v" : 22, "w" : 23, "x" : 24, "y" : 25, "z" : 26 }
     
     
    return str.split("").map((item) => LETTER_VALUE_MAP[item]).reduce((iV, acc) => iV + acc, 0);
  }
}

//need to study these two
function high(words) {

  const alpha = ' abcdefghijklmnopqrstuvwxyz';
  const score = word => word.split('').reduce((a, b) => a + alpha.indexOf(b), 0);

  return words
    .split(' ')
    .map((word, pos) => ({ word: word, pos: pos, score: score(word) }))
    .sort((a, b) => a.score - b.score || b.pos - a.pos)
    .pop()
    .word;
    
}
function high(s){
  let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
  return s.split(' ')[as.indexOf(Math.max(...as))];
}


//slightly cleaner version of mine
const charToScore = { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10, 'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15, 'p': 16, 'q': 17, 'r': 18, 's': 19, 't': 20, 'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26 };


function high(x){
    const array = x.split(" ");
    const arrayOfScores = array.map(word => word.split("").reduce((score, char) => score + charToScore[char], 0))
    const indexOfResult = arrayOfScores.indexOf(Math.max(...arrayOfScores));
    return array[indexOfResult];
}
