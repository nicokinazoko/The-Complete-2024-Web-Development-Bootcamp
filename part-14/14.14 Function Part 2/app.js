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
  var days = 365 * (90 - age);
  var weeks = 52 * (90 - age);
  var months = 12 * (90 - age);
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
