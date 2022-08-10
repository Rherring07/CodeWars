// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

//basic version
function humanReadable (seconds) {
  let hours = 0;
  let minutes = 0;
  
  hours = Math.floor(seconds / 3600);
  seconds %= 3600;
  
  minutes = Math.floor(seconds / 60);
  seconds %= 60;
  
  //pad function
  var pad = function(val){
  return val < 10 ? "0" + val  : val;
}
  
  return pad(hours) + ":" +pad(minutes) + ":" + pad(seconds);
}
 


//
  
