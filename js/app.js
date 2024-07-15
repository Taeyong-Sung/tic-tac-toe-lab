/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

/*---------------------------- Variables (state) ----------------------------*/
let board, winner, turn, tie;

/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll(".sqr");
const messageEl = document.querySelector("#message");

/*-------------------------------- Functions --------------------------------*/
const init = () => {
  board = ["", "X", "", "", "O", "", "", "", ""];
  turn = "X";
  winner = false;
  tie = false;

  // console.log('init has been invoked');
  render();
};

const render = () => {
  // console.log('render invoked');
  updateBoard();
  updateMessage();
};

function updateBoard() {
  board.forEach((cell, idx) => {
    // console.log(cell);
    if (cell === "X") {
      squareEls[idx].textContent = "X";
      // squareEls[idx].style.backgroundColor = 'green'
    } else if (cell === "O") {
      squareEls[idx].textContent = "O";
      // squareEls[idx].style.backgroundColor = 'blue'
    } else {
      squareEls[idx].textContent = "";
      // squareEls[idx].style.backgroundColor = 'white'
    }
  });
}

function updateMessage() {
  if (!winner && !tie) {
    messageEl.textContent = `It is ${turn}'s turn`;
  } else if (!winner && tie) {
    messageEl.textContent = "Cat's game meow!!!";
  } else {
    messageEl.textContent = `${turn} wins the game!`;
  }
}

function handleClick(evt) {}

/*----------------------------- Event Listeners -----------------------------*/
init();

//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality
