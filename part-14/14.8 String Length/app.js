// You have writtern 182 characters, you have -24 character left

var sentence = prompt('Type the sentence');

alert(
  'You have written ' +
    sentence.length +
    ', you have ' +
    (240 - sentence.length) +
    ' characters left'
);
