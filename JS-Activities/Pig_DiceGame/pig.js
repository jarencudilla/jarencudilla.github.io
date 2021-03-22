var scores, currentScore, currentPlayer, gameActive, lastRoll;

const winningScore = 100;

//initialize board / reset 
initGame();

//if you roll a 1, the current score goes back to zero and ends turn
function switchCurrentPlayer() {
if (currentPlayer === 0) {
    currentPlayer = 1
  } else currentPlayer = 0; currentScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
}
//plays audio when you click on the roll button
function play() {
  var audio = document.getElementById("audio");
  audio.play();
}

//roll function (click event)
document.querySelector('.btn-roll').addEventListener('click', function() {
if (gameActive) {
  var dice = Math.floor(Math.random() * 6) + 1;
  var diceDisplay = document.querySelector('.dice');
  diceDisplay.style.display = 'block';
  diceDisplay.src = 'dice-' + dice + '.png';
  
  // window.requestAnimationFrame(() => {
  //   window.requestAnimationFrame(() => {
  //     document.querySelector(".dice").className = "Rolling dice";
  //   });
  // });

if (dice !== 1) {
  currentScore += dice;
  document.querySelector('#current-' + currentPlayer).textContent = currentScore;
  } else {
  switchCurrentPlayer();
  }
  lastRoll = dice;
}
});

//animates dice rolling
// function animateDiceRoll {

// }

//hold function (click event)
document.querySelector('.btn-hold').addEventListener('click', function() {
if (gameActive) {
  scores[currentPlayer] += currentScore;
  document.querySelector('#score-' + currentPlayer).textContent = scores[currentPlayer];

if (scores[currentPlayer] >= winningScore) {
  document.querySelector('#name-' + currentPlayer).textContent = 'Winner!';
  document.querySelector('.dice').style.display = 'none';
  document.querySelector('.player-' + currentPlayer + '-panel').classList.add('winner');
  document.querySelector('.player-' + currentPlayer + '-panel').classList.remove('active');
  gameActive = false;
  } else {
    switchCurrentPlayer();
  }
}
});

document.querySelector('.btn-new').addEventListener('click', initGame);

function initGame() {
  scores = [0, 0];
  currentScore = 0;
  currentPlayer = 0;
  gameActive = true;
  document.querySelector('.dice').style.display = 'none';
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Piggie 1';
  document.getElementById('name-1').textContent = 'Piggie 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
}

