function fibonacciGenerator(n) {
  //Do NOT change any of the code above 👆

  //Write your code here:
  if (n === 0) {
    return [0];
  }

  var arrayFibbonacci = [0, 1];

  for (var i = 2; i < n; i++) {
    var currentNumber = arrayFibbonacci[i - 1] + arrayFibbonacci[i - 2];
    arrayFibbonacci.push(currentNumber);
  }

  return arrayFibbonacci;

  //Return an array of fibonacci numbers starting from 0.

  //Do NOT change any of the code below 👇
}

console.log(fibonacciGenerator(7));
