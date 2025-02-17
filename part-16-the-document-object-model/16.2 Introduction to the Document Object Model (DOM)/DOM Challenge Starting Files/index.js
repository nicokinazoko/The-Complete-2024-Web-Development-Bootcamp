// challenge
// select third li and change it to another word

var thirdLi = document.querySelector('ul').lastElementChild;
thirdLi.innerHTML = 'Nice';

// answer from solution
document.firstElementChild.lastElementChild.querySelector(
  'ul'
).lastElementChild.innerHTML = 'Angela';
