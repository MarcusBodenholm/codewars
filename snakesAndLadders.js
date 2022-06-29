/* Introduction
Snakes and Ladders is an ancient Indian board game regarded today as a worldwide classic. It is played between two or more players on a gameboard having numbered, gridded squares. A number of "ladders" and "snakes" are pictured on the board, each connecting two specific board squares. (Source Wikipedia)

Task
Your task is to make a simple class called SnakesLadders. The test cases will call the method play(die1, die2) independantly of the state of the game or the player turn. The variables die1 and die2 are the die thrown in a turn and are both integers between 1 and 6. The player will move the sum of die1 and die2.
The Board
https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/snakesandladdersboard.jpg

Rules
1.  There are two players and both start off the board on square 0.

2.  Player 1 starts and alternates with player 2.

3.  You follow the numbers up the board in order 1=>100

4.  If the value of both die are the same then that player will have another go.

5.  Climb up ladders. The ladders on the game board allow you to move upwards and get ahead faster. If you land exactly on a square that shows an image of the bottom of a ladder, then you may move the player all the way up to the square at the top of the ladder. (even if you roll a double).

6.  Slide down snakes. Snakes move you back on the board because you have to slide down them. If you land exactly at the top of a snake, slide move the player all the way to the square at the bottom of the snake or chute. (even if you roll a double).

7.  Land exactly on the last square to win. The first person to reach the highest square on the board wins. But there's a twist! If you roll too high, your player "bounces" off the last square and moves back. You can only win by rolling the exact number needed to land on the last square. For example, if you are on square 98 and roll a five, move your game piece to 100 (two moves), then "bounce" back to 99, 98, 97 (three, four then five moves.)

8.  If the Player rolled a double and lands on the finish square “100” without any remaining moves then the Player wins the game and does not have to roll again.
Returns
Return Player n Wins!. Where n is winning player that has landed on square 100 without any remainding moves left.

Return Game over! if a player has won and another player tries to play.

Otherwise return Player n is on square x. Where n is the current player and x is the sqaure they are currently on.
Good luck and enjoy!
*/

class SnakesLadders {
  constructor(){
    this.players = [{name: "Player 1", square: 0}, {name: "Player 2", square: 0}]
    this.snake = {head: [16, 46, 49, 62, 64, 74, 89, 92, 95, 99],
    tail: [6, 25, 11, 19, 60, 53, 68, 88, 75, 80]}
    this.ladder = {bottom: [2, 7, 8, 15, 21, 28, 36, 51, 71, 78, 87 ],
    top:[38, 14, 31, 26, 42, 84, 44, 67, 91, 98, 94]}
    this.currentPlayer = 0;
    this.gameOver = false;
  }
  play(die1, die2){
    let number = this.currentPlayer;
    this.players[number].square+= die1 + die2;
    this.players[number].square = this.move(this.players[number].square);
    if (die1 !== die2){
      this.updateActive();
    }
    if (this.gameOver){
      return "Game over!"
    } else if (this.players[number].square === 100){
      this.gameOver = true;
      return `${this.players[number].name} Wins!` 
    } else {
      return `${this.players[number].name} is on square ${this.players[number].square}`
    }
  }
  updateActive(){
    this.currentPlayer = this.currentPlayer === 0 ? 1 : 0;
    }
  move(nr){
    if (nr > 100){
      return this.move(100-(nr-100));
    }
    let snakeHead = this.snake.head.indexOf(nr);
    let ladderBottom = this.ladder.bottom.indexOf(nr);
    return snakeHead > -1 ? this.snake.tail[snakeHead] : ladderBottom > -1 ? this.ladder.top[ladderBottom] : nr;
  }
};
