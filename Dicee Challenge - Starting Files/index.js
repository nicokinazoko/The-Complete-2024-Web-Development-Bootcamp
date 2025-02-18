// set random number for dice 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// set dice 1 based on random number
document
  .querySelector('.img1')
  .setAttribute('src', './images/dice' + randomNumber1 + '.png');
