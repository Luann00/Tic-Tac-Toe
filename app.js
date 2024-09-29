let button1 = document.querySelector("#btn1");
let button2 = document.querySelector("#btn2");
let button3 = document.querySelector("#btn3");
let button4 = document.querySelector("#btn4");
let button5 = document.querySelector("#btn5");
let button6 = document.querySelector("#btn6");
let button7 = document.querySelector("#btn7");
let button8 = document.querySelector("#btn8");
let button9 = document.querySelector("#btn9");








let gameBoard = (function () {
    let board = ["", "", "", "", "", "", "", "", ""]

    let getBoard = () => board;


    //Method for overwriting the field
    const setField = (symbol, index) => {
        board[index - 1] = symbol;

    };


    const getField = (index) => board[index]


    return { getBoard, setField, getField }

})();




function drawBoard() {
    console.log(" ");
    console.log(' ' + (gameBoard.getBoard()[6] || '7 ') + " | " + (gameBoard.getBoard()[7] || ' 8 ') + " | " + (gameBoard.getBoard()[8] || ' 9 '));
    console.log("---------------");
    console.log(' ' + (gameBoard.getBoard()[3] || '4 ') + " | " + (gameBoard.getBoard()[4] || ' 5 ') + " | " + (gameBoard.getBoard()[5] || ' 6 '));
    console.log("---------------");
    console.log(' ' + (gameBoard.getBoard()[0] || '1 ') + " | " + (gameBoard.getBoard()[1] || ' 2 ') + " | " + (gameBoard.getBoard()[2] || ' 3 '));
    console.log(" ");
    console.groupEnd();
};


createPlayer = (name, sign) => {
    let won = false;

    let getWon = () => won
    let setWon = () => won = true;
    let getName = () => name;
    let getSign = () => sign;

    let startRound = () => startNewRound(sign)
    return { getName, getSign, playRound, getWon, setWon, startRound }
}

let player1 = createPlayer("Luan", "X");
let player2 = createPlayer("Bot", "O");
let currentPlayer = player1





function checkEnd() {
    for (let i = 0; i < gameBoard.getBoard().length; i++) {
        if (gameBoard.getBoard()[i] == "") {
            return false;
        }
    }

    return true;
}

button1.addEventListener('click', () => {
    button1.innerHTML = currentPlayer.getSign();
    playRound(currentPlayer.getSign(), 1)
});

button2.addEventListener('click', () => {
    button2.innerHTML = currentPlayer.getSign();
    playRound(currentPlayer.getSign(), 2)

});
button3.addEventListener('click', () => {
    button3.innerHTML = currentPlayer.getSign();
    playRound(currentPlayer.getSign(), 3)

});
button4.addEventListener('click', () => {
    button4.innerHTML = currentPlayer.getSign();
    playRound(currentPlayer.getSign(), 4)

});
button5.addEventListener('click', () => {
    button5.innerHTML = currentPlayer.getSign();
    playRound(currentPlayer.getSign(), 5)

});
button6.addEventListener('click', () => {
    button6.innerHTML = currentPlayer.getSign();
    playRound(currentPlayer.getSign(), 6)

});
button7.addEventListener('click', () => {
    button7.innerHTML = currentPlayer.getSign();
    playRound(currentPlayer.getSign(), 7)

});
button8.addEventListener('click', () => {
    button8.innerHTML = currentPlayer.getSign();
    playRound(currentPlayer.getSign(), 8)

});
button9.addEventListener('click', () => {
    button9.innerHTML = currentPlayer.getSign();
    playRound(currentPlayer.getSign(), 9)

});


function playRound(sign, index) {

    gameBoard.setField(currentPlayer.getSign(), index);

    let diagonalNumbers = [1, 5, 9, 7, 5, 3];

    if (diagonalNumbers.includes(index)) {
        if (checkDiagonal(index, currentPlayer.getSign())) {

        }
    }


    //to-do: create own method for the first check and call it in each if statement
    if (index == 1 || index == 2 || index == 3) {
        //check for vertical win
        if (gameBoard.getBoard()[0] == gameBoard.getBoard()[1] && gameBoard.getBoard()[0] == gameBoard.getBoard()[2]) {
            if (currentPlayer.getSign() == "X") {
                currentPlayer.setWon();
            } else {
                currentPlayer.setWon();
            }
            announceWinner()
            return;
        } else if (gameBoard.getBoard()[index - 1] == gameBoard.getBoard()[index + 2] && gameBoard.getBoard()[index - 1] == gameBoard.getBoard()[index + 5]) {
            if (currentPlayer.getSign() == "X") {
                currentPlayer.setWon();
            } else {
                currentPlayer.setWon();
            }
            return;
        }
    }

    if (index == 4 || index == 5 || index == 6) {
        //check for vertical win
        if (gameBoard.getBoard()[3] == gameBoard.getBoard()[4] && gameBoard.getBoard()[3] == gameBoard.getBoard()[5]) {
            if (currentPlayer.getSign() == "X") {
                currentPlayer.setWon();
            } else {
                currentPlayer.setWon();
            }
            announceWinner();
            return;
        } else if (gameBoard.getBoard()[index - 1] == gameBoard.getBoard()[index + 2] && gameBoard.getBoard()[index - 1] == gameBoard.getBoard()[index - 4]) {
            if (currentPlayer.getSign() == "X") {
                currentPlayer.setWon();
            } else {
                currentPlayer.setWon();
            }
            return;
        }

    }


    if (index == 7 || index == 8 || index == 9) {
        //check for vertical win
        if (gameBoard.getBoard()[6] == gameBoard.getBoard()[7] && gameBoard.getBoard()[6] == gameBoard.getBoard()[8]) {
            if (currentPlayer.getSign() == "X") {
                currentPlayer.setWon();
            } else {
                currentPlayer.setWon();
            }
            announceWinner()
            return;
        } else if (gameBoard.getBoard()[index - 1] == gameBoard.getBoard()[index - 4] && gameBoard.getBoard()[index - 1] == gameBoard.getBoard()[index - 7]) {
            if (currentPlayer.getSign() == "X") {
                currentPlayer.setWon();
            } else {
                currentPlayer.setWon();
            }
            return;
        }

    }



    if (currentPlayer == player2) {
        currentPlayer = player1
    } else {
        currentPlayer = player2
    }

    drawBoard();


}


function checkDiagonal(index, sign) {

    if (index == 1 || index == 5 || index == 9) {
        if (gameBoard.getBoard()[0] == gameBoard.getBoard()[4] && gameBoard.getBoard()[0] == gameBoard.getBoard()[8]) {
            if (currentPlayer.getSign() == "X") {
                currentPlayer.setWon();
            } else {
                currentPlayer.setWon();
            }
            announceWinner()
            return true;
        }
    }
    if (index == 7 || index == 5 || index == 3) {
        if (gameBoard.getBoard()[6] == gameBoard.getBoard()[4] && gameBoard.getBoard()[6] == gameBoard.getBoard()[2]) {
            if (currentPlayer.getSign() == "X") {
                currentPlayer.setWon();
            } else {
                currentPlayer.setWon();
            }

            announceWinner()
            return true;
        }
    }

    return false;

}



function announceWinner() {

    if (player1.getWon()) {
        console.log(`${player1.getName()} won the game!`)
    } else if (player2.getWon()) {
        console.log(`${player2.getName()} won the game!`)
    } else if (checkEnd()) {
        console.log("Tie!")
    }

    disableAllButtons();

}


function disableAllButtons() {
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    button4.disabled = true;
    button5.disabled = true;
    button6.disabled = true;
    button7.disabled = true;
    button8.disabled = true;
    button9.disabled = true;


    document.querySelector("#winnerText").innerHTML = `${currentPlayer.getName()} won the game!`;

}



