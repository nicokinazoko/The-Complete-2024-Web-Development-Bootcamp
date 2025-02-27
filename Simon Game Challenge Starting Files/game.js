var gamePattern = [];
var buttonColours = ['red', 'blue', 'green', 'yellow'];
var randomChosenColour = buttonColours[nextSequence()];
gamePattern.push(randomChosenColour);

function nextSequence() {
  var randomNumber = Math.round(Math.random(0, 3) * 3);
  return randomNumber;
}

$('.btn').on('click', function () {
  var buttonId = $(this).attr('id');

  $('#' + buttonId)
    .fadeOut(100)
    .fadeIn(100);

  var audio = new Audio('./sounds/' + buttonId + '.mp3');
  audio.play();
});
