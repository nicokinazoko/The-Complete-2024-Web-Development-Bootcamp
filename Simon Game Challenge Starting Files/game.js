var buttonColours = ['red', 'blue', 'green', 'yellow'];
var userClickedPattern = [];
var gamePattern = [];

var level = 0;
var keyboardPressed = false;

var keyboardEvent = $('body').on('keypress', function () {
  if (!keyboardPressed) {
    $('#level-title').text('Level ' + level);

    nextSequence();
    keyboardPressed = true;
  }
});

$('.btn').on('click', function () {
  var buttonId = $(this).attr('id');

  userClickedPattern.push(buttonId);
  $('#' + buttonId)
    .fadeOut(100)
    .fadeIn(100);

  playSound(buttonId);
  animatePress(buttonId);
});

function nextSequence() {
  level++;
  $('#level-title').text('Level ' + level);
  var randomNumber = Math.round(Math.random(0, 3) * 3);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
}

function playSound(name) {
  var audio = new Audio('./sounds/' + name + '.mp3');
  audio.play();
}

function animatePress(currentColour) {
  var button = $('#' + currentColour);
  button.addClass('pressed');

  setTimeout(function () {
    button.removeClass('pressed');
  }, 100);
}
