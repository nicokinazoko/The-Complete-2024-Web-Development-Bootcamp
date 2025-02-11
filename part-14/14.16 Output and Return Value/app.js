// function getMilk(money) {
//   return money % 1.5;
// }

function getMilk(money, costPerBottle) {
  console.log('leaveHouse');
  console.log('moveRight');
  console.log('moveRight');
  console.log('moveUp');
  console.log('moveUp');
  console.log('moveUp');
  console.log('moveUp');
  console.log('moveRight');
  console.log('buy ' + calcBoottles(money, costPerBottle) + ' of milk');
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
  return calcChange(money, costPerBottle);
}

function calcBoottles(startingMoney, costPerBottle) {
  var numberofBootles = Math.floor(startingMoney / costPerBottle);

  return numberofBootles;
}

function calcChange(startingMoney, costPerBottle) {
  var change = startingMoney % costPerBottle;
  return change;
}

var change = getMilk(11, 1.5);
console.log(change);
