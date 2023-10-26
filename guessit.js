let maxGuessCounts = [8, 10, 12, 14, 15, 18, 20, 21, 23, 25];
let previousGuesses = [];
let lastResult = document.querySelector(".lastResult");
let guesses = document.querySelector(".guesses");
let lowOrHi = document.querySelector(".lowOrHigh");
let guessField = document.querySelector(".guessField");
let range = document.querySelector(".range"); 
let maxim = document.querySelector('.maxim');
const guessSubmit = document.querySelector(".guessSubmit");
const advanceButton = document.querySelector(".advance");
const startAgainButton = document.querySelector(".startAgain");
const startOverButton = document.querySelector(".startOver");
let currentLevel = 1;
let guessCount = 0;
let resetButton;

function startOver() {
  currentLevel = 1;
  guessCount = 0; 
  guessField.value = ''; 
  lastResult.textContent = ''; 
  previousGuesses = [];
  guesses.textContent = 'Previous guesses: ';
  lowOrHi.textContent = ''; 
  guessField.disabled = false; 
  randomNumber = generateRandomNumber(currentLevel);
  startOverButton.style.display = 'none';
  guessSubmit.style.display = 'inline'
  maxim.innerHTML = 'Maximum of 8 trials';
  document.querySelector('.range').textContent = 'Enter a number between 1 and 100 inclusive';
  document.querySelector('.level').textContent = `Level ${currentLevel}`;
}
document.querySelector('.startOver').addEventListener('click', startOver);

  function generateRandomNumber(currentLevel) {
  if (currentLevel === 1) {
    return Math.floor(Math.random() * 100) + 1;
  } else if (currentLevel === 2) {
    return Math.floor(Math.random() * 150) + 1;
  }
   else if (currentLevel === 3) {
    return Math.floor(Math.random() * 200) + 1;
  }
   else if (currentLevel === 4) {
    return Math.floor(Math.random() * 250) + 1;
  }
   else if (currentLevel === 5) {
    return Math.floor(Math.random() * 300) + 1;
  }
   else if (currentLevel === 6) {
    return Math.floor(Math.random() * 351) - 50;
  }
   else if (currentLevel === 7) {
    return Math.floor(Math.random() * 401) - 100;
  }
   else if (currentLevel === 8) {
    return Math.floor(Math.random() * 451) - 150;
  }
   else if (currentLevel === 9) {
    return Math.floor(Math.random() * 501) - 200;
  }
   else if (currentLevel === 10) {
    return Math.floor(Math.random() * 551) - 250;
  }
}
let randomNumber = generateRandomNumber(currentLevel);

function guessRange(userGuess, currentLevel) {
    let min, max;

    if (currentLevel === 1) {
        min = 1;
        max = 100;
    } else if (currentLevel === 2) {
        min = 1;
        max = 150;
    } else if (currentLevel === 3) {
        min = 1;
        max = 200;
    } else if (currentLevel === 4) {
        min = 1;
        max = 250;
    } else if (currentLevel === 5) {
        min = 1;
        max = 300;
    } else if (currentLevel === 6) {
        min = -50;
        max = 300;
    } else if (currentLevel === 7) {
        min = -100;
        max = 300;
    } else if (currentLevel === 8) {
        min = -150;
        max = 300;
    } else if (currentLevel === 9) {
        min = -200;
        max = 300;
    } else if (currentLevel === 10) {
        min = -250;
        max = 300;
    }
    return userGuess >= min && userGuess <= max;
}

function checkGuess() {
let userGuess = Number(guessField.value);

  if (!guessRange(userGuess, currentLevel)) {
    lastResult.textContent = 'Invalid guess range!';
    lastResult.style.backgroundColor = 'red';
    return;
  }

  previousGuesses.push(userGuess);
  guesses.textContent = 'Previous guesses: ' + previousGuesses.join(', ');


  if (userGuess === randomNumber) {
     lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    guessField.disabled = true;
    guessSubmit.remove();
    advanceButton.style.display = 'inline';
  } else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    guessField.value = ''
    if (userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!';
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high!';
    }
    if (guessRange(userGuess, currentLevel)) {
      guessCount++;
      if (guessCount === maxGuessCounts[currentLevel - 1]) {
    lastResult.textContent = '!!!GAME OVER!!!';
    guessField.disabled = true;
    guessSubmit.remove();
    startAgainButton.style.display = 'inline';
    return;
  }
    }
  }
}
guessSubmit.addEventListener('click', checkGuess);

function advanceLevel() {
  ++currentLevel;
let realMax = maxGuessCounts[currentLevel - 1];

 if (currentLevel <= 10) {
  previousGuesses = []; 
  guesses.textContent = 'Previous guesses: ';
  guessCount = 0; 
  guessField.value = ''; 
  lastResult.textContent = '';
  lowOrHi.textContent = ''; 
  guessField.disabled = false;
  randomNumber = generateRandomNumber(currentLevel);

  document.querySelector('.level').textContent = `Level ${currentLevel}`;
  
  let min, max;

  if (currentLevel === 1) {
        min = 1;
        max = 100;
    } else if (currentLevel === 2) {
        min = 1;
        max = 150;
    } else if (currentLevel === 3) {
        min = 1;
        max = 200;
    } else if (currentLevel === 4) {
        min = 1;
        max = 250;
    } else if (currentLevel === 5) {
        min = 1;
        max = 300;
    } else if (currentLevel === 6) {
        min = -50;
        max = 300;
    } else if (currentLevel === 7) {
        min = -100;
        max = 300;
    } else if (currentLevel === 8) {
        min = -150;
        max = 300;
    } else if (currentLevel === 9) {
        min = -200;
        max = 300;
    } else if (currentLevel === 10) {
        min = -250;
        max = 300;
    }

  document.querySelector('.range').textContent = `Enter a number between ${min} and ${max} inclusive`;

  document.querySelector('.maxim').textContent = `Maximum of ${realMax} trials`;
  advanceButton.style.display = 'none';
  guessSubmit.style.display = 'inline';
} else {
    lastResult.textContent = 'You have completed all levels!';
    lastResult.style.backgroundColor = 'blue';
    guessField.disabled = true;
    guessSubmit.remove();
    startOverButton.style.display = 'inline';
    guessSubmit.style.display = 'none';
    advanceButton.style.display = 'none'
    guesses.textContent = '';
}
};
advanceButton.addEventListener('click',function() {
  advanceLevel();
document.querySelector(".contents").appendChild(guessSubmit);;
});

function startAgain() {
  guessCount = 0; 
  guessField.value = '';
  lastResult.textContent = '';
  previousGuesses = [];
  guesses.textContent = 'Previous guesses: ';
  lowOrHi.textContent = ''; 
  guessField.disabled = false;

  document.querySelector(".contents").appendChild(guessSubmit);

  startAgainButton.style.display = 'none'; 
  randomNumber = generateRandomNumber(currentLevel);
}
startAgainButton.addEventListener('click', startAgain);
