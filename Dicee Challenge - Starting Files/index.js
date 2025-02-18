// set random number for dice 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// set dice 1 based on random number
document
  .querySelector('.img1')
  .setAttribute('src', './images/dice' + randomNumber1 + '.png');

// set random number for dice 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// set dice 2 based on random number
document
  .querySelector('.img2')
  .setAttribute('src', './images/dice' + randomNumber2 + '.png');

// add condition for random number to set the header
if (randomNumber1 > randomNumber2) {
  document.querySelector('h1').textContent = '🚩Player 1 Win ';
} else if (randomNumber1 < randomNumber2) {
  document.querySelector('h1').textContent = 'Player 2 Win 🚩';
} else {
  document.querySelector('h1').textContent = 'Draw!';
}
