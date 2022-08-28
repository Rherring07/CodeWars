Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]




//2 for loops
function towerBuilder(nFloors) {
  // build here
  let tower = [];
  let floor = [];
  for(let i = 0; i < nFloors; i++) {
    for(let j = 0; j < nFloors + nFloors - 1; j++) {
      floor.push((((j + 1) >= (nFloors - i)) && ((j +1) <= (nFloors + i))) ? "*" : " ");
    }
    tower.push(floor.join(""));
    floor = [];
  }
  return tower;
}

//using repeat and.from
//saw this online, need to take a look at it
function towerBuilder(n) {
  return Array.from({length: n}, function(v, k) {
    const spaces = ' '.repeat(n - k - 1);
    return spaces + '*'.repeat(k + k + 1) + spaces;
  });
}

//need to look at this one too
function towerBuilder(nFloors) {
  var tower = [];
  for (var i = 0; i < nFloors; i++) {
    tower.push(" ".repeat(nFloors - i - 1)
             + "*".repeat((i * 2)+ 1)
             + " ".repeat(nFloors - i - 1));
  }
  return tower;
}
