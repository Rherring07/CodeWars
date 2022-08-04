//given list of non-negative numbers and strings, return the list with just numbers

function filter_list(list) {
  // Return a new array with the strings filtered out
  
  return list.filter( value => (typeof(value) === "number") );
}
