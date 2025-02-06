function getMilk(money) {
  console.log('leaveHouse');
  console.log('moveRight');
  console.log('moveRight');
  console.log('moveUp');
  console.log('moveUp');
  console.log('moveUp');
  console.log('moveUp');
  console.log('moveRight');
  console.log('buy ' + Math.floor(money / 1.5) + ' of milk');
  console.log('moveRight');
  console.log('moveLeft');
  console.log('moveLeft');
  console.log('moveDown');
  console.log('moveDown');
  console.log('moveDown');
  console.log('moveDown');
  console.log('moveLeft');
  console.log('moveLeft');
  console.log('enterHouse');
}

getMilk(11);

function lifeInWeeks(age) {
  /************Don't change the code above************/
  var yearsRemaining = 90 - age;
  var days = 365 * yearsRemaining;
  var weeks = 52 * yearsRemaining;
  var months = 12 * yearsRemaining;
  console.log(
    'You have',
    days,
    'days,',
    weeks,
    'weeks, and',
    months,
    'months left.'
  );

  //Write your code here.
  /*************Don't change the code below**********/
}

lifeInWeeks(56);
