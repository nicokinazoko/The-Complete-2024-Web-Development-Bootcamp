var buttonColours = ['red', 'blue', 'green', 'yellow'];
var gamePattern = [];
var userClickedPattern = [];

var keyboardPressed = false;
var level = 0;

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

  playSound(buttonId);
  animatePress(buttonId);

  checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    $('body').addClass('game-over');
    $('#level-title').text('Game Over, Press Any Key to Restart');
    setTimeout(function () {
      $('body').removeClass('game-over');
      $('#level-title').text('Game Over, Press Any Key to Restart');
    }, 200);
    playSound('wrong');

    startOver();
  }
}

function nextSequence() {
  userClickedPattern = [];
  level++;
  $('#level-title').text('Level ' + level);
  var randomNumber = Math.round(Math.random(0, 3) * 3);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $('#' + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColour);
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

function startOver() {
  level = 0;
  gamePattern = [];
  keyboardPressed = false;
}
