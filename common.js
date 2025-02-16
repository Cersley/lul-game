var numberOfFaces = 2;
var leftSide = document.getElementById('leftSide');
var rightSide = document.getElementById('rightSide');
var body = document.getElementById('mainDiv');
var start = document.getElementById('start');
var startGame = document.getElementById('startGame');
var shortGame = document.getElementById('shortGame');
var longGame = document.getElementById('longGame');
var exit = document.getElementById('exit');
var gameOver = document.getElementById('gameOver');
var f = document.getElementById('f');
var tryAgain = document.getElementById('tryAgain');
var countOfRightChoise = 0;
var checkTypeOfGame;

var myGame = function() {
    for(i=0; i<numberOfFaces; i++) {
        var img = document.createElement('img');
        img.src = '/lul-game/smile.png';
        img.style.left = Math.floor(Math.random()*401) + 'px';
        img.style.top = Math.floor(Math.random()*401) + 'px';
        leftSide.appendChild(img);
    }
    
  leftSideImgs = leftSide.cloneNode(true);
  leftSideImgs.removeChild(leftSideImgs.lastChild);
  rightSide.appendChild(leftSideImgs);
  leftSide.lastChild.onclick = function nextLevel(event) {
    while(leftSide.firstChild) {
      leftSide.removeChild(leftSide.firstChild);
    }
    rightSide.removeChild(rightSide.lastChild);
    event.stopPropagation();
    ChooseTypeOfGame(numberOfFacesAddition, checkTypeOfGame);
    countOfRightChoise += 1;
    myGame();
  };

  leftSide.onclick = function() {
    gameOver.style.display = 'flex';
    body.onclick = null;
    leftSide.lastChild.onclick = null;
    exit.style.display = 'none';

    leftSide.style.visibility = 'hidden';
    rightSide.style.visibility = 'hidden';
    rightSide.children[0].style.visibility = 'hidden';

    f.innerHTML = countOfRightChoise;
  };

  startGame.onclick = function() {
    startGame.style.display = 'none';
    shortGame.style.display = 'block';
    longGame.style.display = 'block';
  };

  shortGame.onclick = function() {
    start.style.display = 'none';
    exit.style.display = 'block';
    leftSide.style.visibility = 'visible';
    rightSide.style.visibility = 'visible';
    rightSide.children[0].style.visibility = 'visible';
    checkTypeOfGame = 5;
  };
  longGame.onclick = function() {
    start.style.display = 'none';
    exit.style.display = 'block';
    leftSide.style.visibility = 'visible';
    rightSide.style.visibility = 'visible';
    rightSide.children[0].style.visibility = 'visible';
    checkTypeOfGame = 2;
  };

  var numberOfFacesAddition = function(number) {
     numberOfFaces += number;
  };

  function ChooseTypeOfGame(fn, num) {
    if(checkTypeOfGame === 5) {
      if(fn(num)) {
        num = checkTypeOfGame;
        return num;
      }
    } else if(checkTypeOfGame === 2) {
      if(fn(num)) {
        num = checkTypeOfGame;
        return num;
      }
    }
  }

  exit.onclick = function() {
    window.location.reload();
  }
  tryAgain.onclick = function() {
    window.location.reload();
  };

};
