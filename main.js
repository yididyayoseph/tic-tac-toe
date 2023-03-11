//highlight the boxes
const boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
  box.addEventListener('mouseover', () => {
    box.classList.add('highlight');
  });
  box.addEventListener('mouseout', () => {
    box.classList.remove('highlight');
  });
});

//check for how many players
let currentPlayer = 'X';
let player1 = '';
let player2 = '';

document.getElementById('one-player').addEventListener('click', () => {
  player1 = prompt('Enter your name:');
  player2 = 'Computer';
});

document.getElementById('two-players').addEventListener('click', () => {
  player1 = prompt('Enter Player 1 name:');
  player2 = prompt('Enter Player 2 name:');
});

boxes.forEach((box) => {
  box.addEventListener('click', () => {
    if (box.textContent === '') {
      box.textContent = currentPlayer;
      if (checkForWinner()) {
        alert(`${currentPlayer} wins!`);
        reset();
      } else if (checkForTie()) {
        alert("It's a tie!");
        reset();
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        if (player2 === 'Computer' && currentPlayer === 'O') {
          setTimeout(computerMove, 500);
        }
      }
    }
  });
});

document.getElementById('play-again').addEventListener('click', () => {
    reset();
  });

function checkForWinner() {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let combo of winningCombos) {
    if (boxes[combo[0]].textContent &&
        boxes[combo[0]].textContent === boxes[combo[1]].textContent &&
        boxes[combo[1]].textContent === boxes[combo[2]].textContent) {
      return true;
    }
  }
  return false;
}

function checkForTie() {
  for (let box of boxes) {
    if (box.textContent === '') {
      return false;
    }
  }
  return true;
}

function reset() {
  boxes.forEach((box) => {
    box.textContent = '';
  });
  currentPlayer = 'X';
}

function computerMove() {
    const emptySquares = Array.from(squares).filter((square) => square.textContent === '');
    const randomIndex = Math.floor(Math.random() * emptySquares.length);
    const chosenSquare = emptySquares[randomIndex];
    chosenSquare.textContent = currentPlayer;

    if (checkForWinner()) {
        alert(`${currentPlayer} wins!`);
        reset();
      } else if (checkForTie()) {
        alert("It's a tie!");
        reset();
      } else {
        currentPlayer = 'X';
      }
}
// function computerMove() {
//   const emptySquares = Array.from(boxes).filter((box) => box.textContent === '');
//   const randomSquare = emptyS
// }
//
// const box = document.getElementById("box");
// // const box = document.querySelectorAll("#box");
// const a = document.getElementsByClassName("a");
// const b = document.getElementsByClassName("b");
// const c = document.getElementsByClassName("c");
// const d = document.getElementsByClassName("d");
// const e = document.getElementsByClassName("e");
// const f = document.getElementsByClassName("f");
// const g = document.getElementsByClassName("g");
// const h = document.getElementsByClassName("h");
// const i = document.getElementsByClassName("i");
// const win = document.getElementById("winner");
// const playAgain = document.getElementById("play-again");

// const highlight = (event) => {
//     box.style.backgroundColor = 'lightblue';
// }

// const donthighlight = () => {
//     box.style.backgroundColor = '';
// }

// const addText = (event) => {
//     const hasInput = false;
//     const input = 'X';
//     box.innerHTML = input;
//     if(input === 'X'){
//         input = 'O'
//         event.target.getElementById('box').innerHTML = input;
//     }
//     else{
//         input = 'X';
//         event.target.getElementById('box').innerHTML = input;
//     }
//     // box.getElementById('box').innerHTML = "X";
// }

// const wins = () => {
//     const x = 'X';
//     const o = 'O';
//     if((a.value === x && b.value === x && c.value === x) || (a.value === o && b.value === o && c.value === o)){
//         win.innerHTML = "Player Wins!";
//         playAgain.refresh;
//     }
// }

// box.onmouseover = highlight;
// box.onmouseleave = donthighlight;
// box.onclick = addText;
// playAgain.onclick = wins;
//
