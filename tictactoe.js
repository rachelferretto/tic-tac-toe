console.log('TicTacToe');

var startBoard;
var player1 = "X";
var player2 = "O";
var moveCount = 0;
var player1Selection = [];
var player2Selection = [];
var clickedItem = '';
var cells = document.querySelectorAll('.cell');
var turn = document.querySelector('.whosturn');
var restartBtn = document.querySelector('.restart');
var p1wins = document.querySelector('#p1score');
var p2wins = document.querySelector('#p2score');
var p1runningTotal = 0;
var p2runningTotal = 0;
var drawTotal = 0;
var draw = document.querySelector('#drawscore');
var winnerAlert = document.querySelector('.alert');
var winnerBanner = document.querySelector('.winner-banner');
var winSound = new Audio("moewinner.mp3")


winnerBanner.classList.add('hidden');

var winnerFound = function(winner) {
    console.log(winner + ' wins!');
    // winSound = new Audio("moewinner.mp3")
    winSound.play();
    if (winner === "X") {
        p1runningTotal = p1runningTotal + 1;
        p1wins.textContent = Number(p1runningTotal);
        winnerBanner.classList.remove('hidden');
        winnerAlert.textContent = 'X Wins!';
    } else if (winner === "O") {
        p2runningTotal = p2runningTotal + 1;
        p2wins.textContent = Number(p2runningTotal);
        winnerBanner.classList.remove('hidden');
        winnerAlert.textContent = 'O Wins!';
    };
};

var noWinner = function() {
    drawTotal = drawTotal + 1;
    draw.textContent = Number(drawTotal);
    winnerBanner.classList.remove('hidden')
    winnerAlert.textContent = 'Draw!';
};

var checkForWin = function(marker) {
    var winner = "";
    var won = false;

    if (cells[0].textContent === marker && cells[1].textContent === marker && cells[2].textContent === marker) {
        winner = marker;
        won = true;
    
    } else if (cells[3].textContent === marker && cells[4].textContent === marker && cells[5].textContent === marker) {
        winner = marker;
        won = true;
    
    } else if (cells[6].textContent === marker && cells[7].textContent === marker && cells[8].textContent === marker) {
        winner = marker;
        won = true;
    
     } else if (cells[0].textContent === marker && cells[3].textContent === marker && cells[6].textContent === marker) {
        winner = marker;
        won = true;
        
    } else if (cells[1].textContent === marker && cells[4].textContent === marker && cells[7].textContent === marker) {
        winner = marker;
        won = true;
    
    } else if (cells[2].textContent === marker && cells[5].textContent === marker && cells[8].textContent === marker) {
        winner = marker;
        won = true;

    } else if (cells[0].textContent === marker && cells[4].textContent === marker && cells[8].textContent === marker) {
        winner = marker;
        won = true;
        
    } else if (cells[2].textContent === marker && cells[4].textContent === marker && cells[6].textContent === marker) {
        winner = marker;
        won = true;
    };

    if (won === true) {
        winnerFound(winner);
        cells.forEach(function(item){ 
            item.removeEventListener('click', nextMove);
         });

    };

    if (moveCount === 9 && won == false) {
        noWinner();
    };
}; 

var nextMove = function(event) {  
    moveCount = moveCount + 1;
    var marker = "";
    
    if (event.target.textContent === '') {
        
        if (moveCount % 2 === 0) {
            marker = player2
            event.target.textContent = player2;
            player2Selection.push(event.target.id);
            turn.textContent = "Player one, it's your turn"
        } else {
            marker = player1
            event.target.textContent = player1;
            player1Selection.push(event.target.id);
            turn.textContent ="Player two, it's your turn"
        };
    };

    if (player1Selection.length >= 3 || player2Selection.length >= 3) {
        checkForWin(marker);
    };
};

cells.forEach(function(item){ 
    item.addEventListener('click', nextMove);
 });


//reset board
restartBtn.addEventListener('click', function(event) {  winSound.pause();
    winSound.currentTime = 0;
    if (moveCount % 2 ===0) {
        moveCount = 1;
        turn.textContent ="Player two, it's your turn"
    } else {
    moveCount = 0;
    turn.textContent = "Player one, it's your turn"
    } //clears moveCount
    cells.forEach(function(item){ 
        item.addEventListener('click', nextMove);
     }); //re-adds event listener
    cells.forEach(function(item){
    item.textContent = ""; //clears board
    winnerBanner.classList.add('hidden');
    });
 });
















