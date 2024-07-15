/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/
let board, winner, turn, tie;

/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll(".sqr");
const messageEl = document.querySelectorAll("#message");

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
