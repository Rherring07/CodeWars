//given an array of numbers, return a phone number using the numbers in the array
//phone number must be in the same order as the array


function createPhoneNumber(numbers){
  
  let phoneNumber = "(";
  for(let i = 0; i<numbers.length; i++){
    if(i === 2){
    phoneNumber += numbers[i] + ") "
    } else if(i === 5){
    phoneNumber += numbers[i] + "-";
    } else {
    phoneNumber += numbers[i]
    }
  }
  return phoneNumber;
}




//using replace

function createPhoneNumber(numbers){
  let phoneNumber = "(xxx) xxx-xxxx";
  
  for(let i = 0; i < numbers.length; i++)
  {
    phoneNumber = phoneNumber.replace('x', numbers[i]);
  }
  
  return phoneNumner;
}
