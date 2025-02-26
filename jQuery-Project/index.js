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

$('h1').before('<button>New</button>');

$('h1').after('<button>New</button>');
$('h1').prepend('<button>New</button>');
$('h1').append('<button>New</button>');
$('button').remove();
