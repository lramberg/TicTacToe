// 1) Define required constants:
const PLAYERS = {
    '1': 'X',
    '-1': 'O',
    'null': ''
}

// Define variables
var board, winner, turn;

var winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8]
]


// 3) Cache Elements
const msgEl = document.getElementById('msg');
const cells = document.querySelectorAll('.cells');


//Init
init ();
function init() {
    for (i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', handleClick);
    }

    board = [null, null, null, null, null, null, null, null, null];
    winner = null;
    turn = 1;
    render();
};

function render() {
    board.forEach(function(cell, cellIdx) {
        cells[cellIdx].textContent = PLAYERS[cell];
    })
    
    for (i = 0; i < cells.length; i++) {
        if (winner) {
            msgEl.textContent = `${PLAYERS[winner]} Wins!`
        }
    }
}

function handleClick (evt) {
    var cellIdx = parseInt(evt.target.id);
    if (board[cellIdx] || winner) return;
    board[cellIdx] = turn;
    turn *= -1;
    checkTurn();
    winner = checkWinner();
    render();
}

function checkTurn() {
    if (turn === 1) {
        msgEl.textContent = "Player One's Turn";
    } else if (turn === -1) {
        msg.textContent = "Player Two's Turn";
    }
}

function checkWinner() {
    for (var i = 0; i < winningCombos.length; i++) {
        if (Math.abs(board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]]) === 3) return board[winningCombos[i][0]]; 
    }
}