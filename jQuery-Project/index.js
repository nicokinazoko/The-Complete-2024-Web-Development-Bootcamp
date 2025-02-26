$('h1').addClass('big-title margin-50');

// $('h1').removeClass('big-title');

$('h1').text('Hi');
$('button').html('<strong>Hey</strong>');

$('a').attr('href', 'http://yahoo.com');

$('h1').click(function () {
  $('h1').css('color', 'purple');
});

$('button').click(function () {
  $('h1').css('color', 'purple');
});

$('body').keypress(function (event) {
  console.log(event.key);
  $('h1').text(event.key);
});

$('h1').on('mouseover', function () {
  $('h1').css('color', 'blue');
});

$('button').on('click', function () {
  $('h1').slideUp().slideDown().animate({ opacity: 0.5 });
});

// $('button').on('click', function () {
//   $('h1').animate({ opacity: 0.5, margin: '20px' });
// });
