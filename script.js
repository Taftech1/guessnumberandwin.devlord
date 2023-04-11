'use strict';
// let paragraph = document.querySelector(".message").innerHTML = "Typing...";

// let randomNumber = document.querySelector(".number");
// randomNumber.textContent = 25

//let score = document.querySelector(".score");

// let userInput = document.querySelector(".guess");

// console.log(userInput.value)

///HANDING CLICK EVENTS
let toggle = true;
let score = 20;
let highScore = 0;
const winsound = document.querySelector('.winsound');
const failsound = document.querySelector('.failsound');
const losesound = document.querySelector('.losesound');
document.querySelector('.reveal').style.display = 'block';

//console.log(highScore);

let randomSecretNumber = Math.round(Math.random() * 20);

document.querySelector('.check').addEventListener('click', function () {
  const guessedNumber = Number(document.querySelector('.guess').value);
  console.log(guessedNumber);
  if (!guessedNumber) {
    document.querySelector('.message').textContent = '🔴 No Number';
  } else if (randomSecretNumber === 0) {
    randomSecretNumber = Math.round(Math.random() * 20);
  } else if (guessedNumber > 20) {
    document.querySelector('.message').textContent = ' Input Erorr';
  }
  ///User input correct Number
  else if (toggle) {
    if (
      guessedNumber === randomSecretNumber ||
      guessedNumber > randomSecretNumber ||
      guessedNumber < randomSecretNumber
    ) {
      let HiLo = guessedNumber > randomSecretNumber ? 'Too High' : 'Too low';
      let EhiLo =
        guessedNumber === randomSecretNumber ? 'Great' : HiLo;
      randomSecretNumber = Math.round(Math.random() * 20);
      document.querySelector('.message').textContent = EhiLo;
      document.querySelector('.result').textContent = randomSecretNumber;
      score--;
      document.querySelector('.score').textContent = score;
      randomSecretNumber = Math.round(Math.random() * 20);
      document.querySelector('.number').textContent = randomSecretNumber;
      document.querySelector('.result').style.display = 'block';
      document.querySelector('body').style.backgroundColor = '#222';
      document.querySelector('.guess').value = '';
      document.querySelector('.number').textContent = '?';
      document.querySelector('.reveal').style.display = ' block';
      document.querySelector('.reveal').textContent = 'Toggle!';
    }
  } else if (guessedNumber === randomSecretNumber) {
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    document.querySelector('.message').textContent = 'You are corret';
    score++;
    document.querySelector('.result').style.display = 'none';
    winsound.play();
    //  highScore += 5;

    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = randomSecretNumber;
    document.querySelector('.guess').value = '';
    document.querySelector('.reveal').style.display = 'none';
    document.querySelector('.reveal').textContent = 'Toggle!';
  } else if (guessedNumber > randomSecretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too high';
      document.querySelector('.result').textContent = `${randomSecretNumber}`;
      score--;
      document.querySelector('.score').textContent = score;
      randomSecretNumber = Math.round(Math.random() * 20);
      // document.querySelector('.number').textContent = randomSecretNumber;
      document.querySelector('.result').style.display = 'block';
      document.querySelector('body').style.backgroundColor = '#222';
      document.querySelector('.guess').value = '';
      document.querySelector('.number').textContent = '?';
      document.querySelector('.reveal').style.display = ' block';
      document.querySelector('.reveal').textContent = 'Toggle!';
      failsound.play();
    } else {
      document.querySelector('.message').textContent = ' You lost the Game';
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.guess').value = '';
      document.querySelector('.reveal').style.display = 'none';
      losesound.play();
    }
  } else if (guessedNumber < randomSecretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too low';
      document.querySelector('.result').textContent = randomSecretNumber;
      score--;
      document.querySelector('.score').textContent = score;
      randomSecretNumber = Math.round(Math.random() * 20);
      document.querySelector('.number').textContent = randomSecretNumber;
      document.querySelector('.result').style.display = 'block';
      document.querySelector('body').style.backgroundColor = '#222';
      document.querySelector('.guess').value = '';
      document.querySelector('.number').textContent = '?';
      document.querySelector('.reveal').style.display = ' block';
      document.querySelector('.reveal').textContent = 'Toggle!';
      failsound.play();
    } else {
      document.querySelector('.message').textContent = ' You lost the Game';
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.guess').value = '';
      document.querySelector('.reveal').style.display = 'none';
      losesound.play();
    }
  } else {
    document.querySelector('.message').textContent = ' You lost the Game';
    document.querySelector('body').style.backgroundColor = 'red';
    document.querySelector('.reveal').style.display = 'none';

    losesound.play();
  }
});

document.querySelector('.again').addEventListener('click', function () {
  toggle = true;
  if (score === 0) {
    document.querySelector('.highscore').textContent = '0';
  }

  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  randomSecretNumber = Math.round(Math.random() * 20);
  //document.querySelector('.number').textContent = randomSecretNumber;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.reveal').style.display = 'block';
  document.querySelector('.result').style.display = 'none';
  document.querySelector('.reveal').textContent = 'Toggle!';
});

document.querySelector('.reveal').addEventListener('click', function () {
  if (score >= 0) {
    if (toggle) {
      toggle = false;
    document.querySelector('.number').textContent = randomSecretNumber;
      document.querySelector('.reveal').textContent = 'Toggle>';
//       score -= 1;
      document.querySelector('.score').textContent = score;
    } else if(!toggle) {
      toggle = true;
      document.querySelector('.number').textContent = randomSecretNumber;
      document.querySelector('.score').textContent = score;
      document.querySelector('.reveal').textContent = 'Toggle!';
    }
  } else {
    document.querySelector('.reveal').textContent = 'Not Enough Scores';
    document.querySelector('.number').textContent = '?';
  }
});
