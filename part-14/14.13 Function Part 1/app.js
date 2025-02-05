/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to
 * write any Karel program you want.
 **/
function main() {
  //your code here
  //   moveFourSteps();
  //   turnLeft();
  //   moveFourSteps();
  putBeeper();
  diagonalMoves();
  diagonalMoves();
  diagonalMoves();
  diagonalMoves();
}

function moveFourSteps() {
  move();
  move();
  move();
  move();
}

function diagonalMoves() {
  move();
  turnLeft();
  move();
  putBeeper();
  turnRight();
}
