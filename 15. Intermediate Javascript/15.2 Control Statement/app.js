var n = Math.random();
n = n * 6;
n = Math.floor(n);
console.log(n);

prompt('What is your name?');
prompt('What is your partner name?');
var percentage = Math.round(Math.random() * 100);
if (percentage > 70) {
  alert('Your match is ' + percentage + '%' + ' Great!');
} else {
  alert('Your match is ' + percentage + '%');
}

console.log(percentage);
