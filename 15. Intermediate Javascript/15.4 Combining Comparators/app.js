var n = Math.random();
n = n * 6;
n = Math.floor(n);
console.log(n);

prompt('What is your name?');
prompt('What is your partner name?');
var percentage = Math.round(Math.random() * 100);
if (percentage === 70) {
  alert('Your match is ' + percentage + '%' + ' Great!');
} else if (percentage > 30 && percentage <= 70) {
  alert('Your match is ' + percentage + '%' + ' Nice!');
} else if (percentage <= 30) {
  alert('Your match is ' + percentage + '%', ' OK');
}

console.log(percentage);

// BMI <18.5, the output should be: "Your BMI is <bmi>, so you are underweight."

// BMI 18.5-24.9, the output should be "Your BMI is <bmi>, so you have a normal weight."

// BMI >24.9, the output should be "Your BMI is <bmi>, so you are overweight."

// The message MUST be returned as an output from your function. You should NOT NEED to use alert, prompt or console.log in this challenge.

function bmiCalculator(weight, height) {
  var bmi = Math.round(weight / Math.pow(height, 2));
  var interpretation;
  if (bmi < 18.5) {
    interpretation = 'Your BMI is ' + bmi + ', so you are underweight.';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    interpretation = 'Your BMI is ' + bmi + ', so you have a normal weight.';
  } else if (bmi > 24.9) {
    interpretation = 'Your BMI is ' + bmi + ', so you are overweight.';
  }
  return interpretation;
}
