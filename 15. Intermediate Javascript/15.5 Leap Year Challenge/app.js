function isLeap(year) {
  /**************Don't change the code above****************/
  //Write your code here.
  var stringLeap;
  if (year % 4 !== 0) {
    if (year % 100 !== 0) {
      stringLeap = 'Leap year.';
    } else {
      stringLeap = 'Not leap year.';
    }
  } else {
    stringLeap = 'Leap year.';
  }

  return stringLeap;
  /**************Don't change the code below****************/
}

console.log(isLeap(2100));
