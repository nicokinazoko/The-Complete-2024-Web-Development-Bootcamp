var gamePattern = [];
var buttonColours = ['red', 'blue', 'green', 'yellow'];
var randomChosenColour = buttonColours[nextSequence()];
gamePattern.push(randomChosenColour);

function nextSequence() {
  var randomNumber = Math.round(Math.random(0, 3) * 3);
  return randomNumber;
}
