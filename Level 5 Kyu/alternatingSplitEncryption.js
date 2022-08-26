//Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

//Examples:

//encrypt("012345", 1)  =>  "135024"
//encrypt("012345", 2)  =>  "135024"  ->  "304152"
//encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

//encrypt("01234", 1)  =>  "13024"
//encrypt("01234", 2)  =>  "13024"  ->  "32104"
//encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
//Together with the encryption function, you should also implement a decryption function which reverses the process.

//If the string S is an empty value or the integer N is not positive, return the first argument without changes.



function encrypt(text, n) {
  
  
  if(text === "" || text === null) 
    return text;
  
  for(let i = 0; i < n; i++) {
    text = encryptOnce(text);
  }
  return text;
  
  function encryptOnce(text) {
    let oddText = "";
    let evenText = "";
    for(let i = 0; i < text.length; i ++) {
      if(i % 2 === 0)
        oddText += text.charAt(i);
      else 
        evenText += text.charAt(i);
    }
    return evenText + oddText;
  }
}

function decrypt(encryptedText, n) {
  if(encryptedText === "" || encryptedText === null) 
    return encryptedText;
  
  for(let i = 0; i < n; i++) {
    encryptedText = decryptOnce(encryptedText);
  }
  return encryptedText;
  
  function decryptOnce(text) {
    let decryptedText = ""
    for(let i = 0; i < encryptedText.length /2; i++) {
      decryptedText+= encryptedText.charAt(i+ encryptedText.length /2) + encryptedText.charAt(i)
    }
    if(text.length % 2 === 1) 
      decryptedText = decryptedText.substring(0, decryptedText.length-2) + text.charAt(text.length-1)

      return decryptedText;
  }
}
