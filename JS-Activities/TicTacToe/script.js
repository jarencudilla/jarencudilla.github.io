const theCell = document.querySelectorAll(".cell")
const theBoard = document.getElementById("gameboard")
const status = document.getElementById("status")
const statusMsgx = "Player 1's turn (X)"
const statusMsgo = "Player 2's turn (O)"
const statusMsgdraw = "Draw!"
const statusMsgcheckwinner = " won the chicken dinner!"
const player1x = 'x';
const player2o = 'o';

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const resetBtn = document.getElementById("resetBtn");


let theGameboard = [
    ["", "", ""],
	["", "", ""],
	["", "", ""]
];
let isnotemptyCell = 0;
let moveCycle;
let gameCheckDone = false;
let ninjaMoves = [];
let countninjaMoves = 0;
startGame();

function startGame() {
    moveCycle = false;
    updatePlayer();
}

theCell.forEach(cell => {
    cell.addEventListener('click', clickHandler, {once:true})
});

function clickHandler() {
    if(gameCheckDone === false) {
    const cell = this;
    const currentPlayer = moveCycle ? player2o : player1x;
    playerMarker (cell, currentPlayer);
    updateBoard(cell, currentPlayer);
    logMoves(cell, currentPlayer); 
    checkWinner(currentPlayer);
    switchPlayer();
    updatePlayer();
    }
    else {
        theBoard.classList.remove(player1x, player2o);
        console.log("Click Start")
    }
}
function playerMarker(cell, currentPlayer) {
        cell.classList.add(currentPlayer);
    }
function updateBoard(cell, currentPlayer) {
        const row = cell.dataset.row;
        const column = cell.dataset.column;
        theGameboard[row][column] = currentPlayer;
    }
function logMoves(cell, currentPlayer) {
    ninjaMoves[countninjaMoves] = [
        (countninjaMoves),
        (currentPlayer),
        (cell.dataset.row),
        (cell.dataset.column)
        ];
        console.log(`Turn ${ninjaMoves[countninjaMoves][0] + 1}: ${ninjaMoves[countninjaMoves][1].toUpperCase()} at ${Number((ninjaMoves[countninjaMoves][2])) + 1}, ${Number(ninjaMoves[countninjaMoves][3]) + 1}`);
        countninjaMoves ++;
}
function switchPlayer() {
        moveCycle = !moveCycle
}
function updatePlayer(statusMsgcheckwinner) {
    theBoard.classList.remove(player1x, player2o);
    if (gameCheckDone === false) {
        if (moveCycle) {
        theBoard.classList.add(player2o);
        status.innerHTML = statusMsgo;
        }
    else {
        theBoard.classList.add(player1x);
        status.innerHTML = statusMsgx;
        }
    }
}
function checkWinner(currentPlayer) {
    let pWinner = currentPlayer.toUpperCase();
// check horizontal       
for (let row=0; row<theGameboard.length; row++) {
    let a = theGameboard[row][0];
    let b = theGameboard[row][1];
    let c = theGameboard[row][2];
if(a && a===b && b===c && gameCheckDone === false) {
    console.log(pWinner + " " + "wins!")
    hasWinner(pWinner);
break;
}
}
//check vertical 
for (let column=0; column<theGameboard.length; column++) {
    let a = theGameboard[0][column];
    let b = theGameboard[1][column];
    let c = theGameboard[2][column];
if(a && a===b && b===c && gameCheckDone === false) {
    console.log(pWinner + " " + "wins!")
    hasWinner(pWinner);
break;
}
}
//diagonals
if (gameCheckDone === false) {
    let a = theGameboard[0][2];
    let b = theGameboard[1][1];
    let c = theGameboard[2][0];
if(a && a===b && b===c) {
    console.log(pWinner + " " + "wins!")
    hasWinner();
    }
} 
if (gameCheckDone === false) {
    let a = theGameboard[0][0];
    let b = theGameboard[1][1];
    let c = theGameboard[2][2];
if(a && a===b && b===c) {
    console.log(pWinner + " " + "wins!")
    hasWinner(pWinner);
    }
}    
}
function hasWinner(pWinner) {
    gameCheckDone = true;
    status.innerHTML = pWinner + statusMsgcheckwinner;
    nextBtn.style.visibility = "hidden"
        }
    for (let row=0; row<theGameboard.length; row++) {
        for (let column=0; column<theGameboard.length; column++) {
            if(theGameboard[row][column] !== 0) {
                isnotemptyCell += 1
            }
        }
    }
if (isnotemptyCell === 9 && gameCheckDone === false) {
    gameCheckDone = true;
    status.innerHTML = statusMsgdraw;
    nextBtn.style.visibility = "hidden"
    console.log("Draw!")
    }
    else {
        isnotemptyCell = 0;
    }


//button stuff


function resetGameboard() {
    theGameboard = [
            ["", "", ""],
			["", "", ""],
			["", "", ""]
    ];
        ninjaMoves = [];
        countninjaMoves = 0
        gameCheckDone = false;
        isnotemptyCell = 0
        theCell.forEach(cell => {
            cell.classList.remove(player1x, player2o);
            cell.addEventListener('click', clickHandler, {once:true});
        });
        prevBtn.style.visibility = "hidden"
        nextBtn.style.visibility = "hidden"
        startGame();
    }

    function movePrev() {
        if (countninjaMoves === ninjaMoves.length) {
            countninjaMoves -= 1;
        }
        if (countninjaMoves < 0) {
            countninjaMoves += 1;
        }
        if (countninjaMoves >= 0) {
            nextBtn.style.visibility="visible"
            let moveData = ninjaMoves[countninjaMoves];
            const turn = moveData[1];
            const row = moveData[2];
            const column = moveData[3];
            const cell = document.querySelector(`[data-row='${row}'][data-column='${column}']`);
            cell.classList.remove(turn);
            if (countninjaMoves === 0) {
                prevBtn.style.visibility = "hidden"
                console.log("First");
            }
            else {
                countninjaMoves --;
            }
        }
    }

function moveNext() {
    if (countninjaMoves === ninjaMoves.length) {
            countninjaMoves -= 1;
        }
    if (countninjaMoves < 0) {
            countninjaMoves += 1;
        }
    if (countninjaMoves < ninjaMoves.length) {
            prevBtn.style.visibility="visible"
            let moveData = ninjaMoves[countninjaMoves];
            const turn = moveData[1];
            const row = moveData[2];
            const column = moveData[3];
            const cell = document.querySelector("[data-row='${row}'][data-column='${column}']");
            cell.classList.add(turn);
    if (countninjaMoves === ninjaMoves.length - 1) {
                nextBtn.style.visibility = "hidden"
                console.log("Last")
    }
    else {
            countninjaMoves ++;
        }   
    }
}

//to display console.log on movelist div
function logToContainer (message) {
    var container = document.getElementById('movelist')
    var messageElement = document.createElement('pre')
    messageElement.innerHtml = message
    container.appendChild(messageElement)
}
