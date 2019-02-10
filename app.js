let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user_score');
const computerScore_span = document.getElementById('comp_score');
const scoreBoard_div = document.querySelector('.scoreboard');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors']; //creating an array that represents computer choices
  const randomComputerChoice = Math.floor(Math.random() * 3); //generates a random number between 0 and 1
  return choices[randomComputerChoice]; // returns the choice of the computer(index goes from 0 to 1)
}

function win(userChoice, computerChoice) {
  //case where the user wins
  const smallUserWord = 'User'.fontsize(3).sub();
  const smallCompWord = 'Comp'.fontsize(3).sub();
  userScore++;
  userScore_span.innerHTML = userScore; //display the change on the html page (scoreboard)
  computerScore_span.innerHTML = computerScore; //display the change on the html page (scoreboard)
  result_p.innerHTML =
    userChoice +
    '' +
    smallUserWord +
    ' beats ' +
    computerChoice +
    '' +
    smallCompWord +
    ' . You Win!'; //display the win message on the html page (ES5 version)
  document.getElementById(userChoice).classList.add('green-glow'); //adds the class green-glow to the winning div user clicks on
  setTimeout(function() {
    document.getElementById(userChoice).classList.remove('green-glow');
  }, 500); //removes the class green-glow after 500ms
}

function lose(userChoice, computerChoice) {
  const smallUserWord = 'User'.fontsize(3).sub();
  const smallCompWord = 'Comp'.fontsize(3).sub();
  computerScore++;
  userScore_span.innerHTML = userScore; //display the change on the html page (scoreboard)
  computerScore_span.innerHTML = computerScore; //display the change on the html page (scoreboard)
  result_p.innerHTML = `${userChoice}${smallUserWord}  loses to  ${computerChoice}${smallCompWord}  . You lose`; //display the lose message on the html page (ES6 version)
  document.getElementById(userChoice).classList.add('red-glow'); //adds the class red-glow the losing div user clicks on
  setTimeout(function() {
    document.getElementById(userChoice).classList.remove('red-glow');
  }, 500); //removes the class red-glow after 500ms
}

function draw(userChoice, computerChoice) {
  result_p.innerHTML = `it's a draw.`;
  document.getElementById(userChoice).classList.add('gray-glow'); //adds the class gray-glow the the div user clicks on
  setTimeout(function() {
    document.getElementById(userChoice).classList.remove('gray-glow');
  }, 500); //removes the class gray-glow after 500ms
}

function game(userChoice) {
  //function that compare user's choice with computer's choice
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case 'rockscissors':
    case 'paperrock':
    case 'scissorspaper':
      win(userChoice, computerChoice);
      break;
    case 'rockpaper':
    case 'paperscissors':
    case 'scissorsrock':
      lose(userChoice, computerChoice);
      break;
    case 'rockrock':
    case 'paperpaper':
    case 'scissorsscissors':
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener('click', function() {
    // adding event on clicks
    game('rock');
  });
  paper_div.addEventListener('click', function() {
    // adding event on clicks
    game('paper');
  });
  scissors_div.addEventListener('click', function() {
    // adding event on clicks
    game('scissors');
  });
}

main();
