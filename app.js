let gameBoard = (function () {
    let board = ["", "", "", "", "", "", "", "", ""]

    let getBoard = () => board;


    //Method for overwriting the field
    const setField = (index, symbol) => {
        if (index >= 1 && index <= board.length && board[index - 1] == "") {
            board[index - 1] = symbol;
        }
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

    let startRound = () => playRound(sign)
    return { getName, getSign, playRound, getWon, setWon, startRound }
}


let player1 = createPlayer("Luan", "X");
let player2 = createPlayer("Bot", "O");


function checkEnd() {
    for (let i = 0; i < gameBoard.getBoard().length; i++) {
        if (gameBoard.getBoard()[i] == "") {
            return false;
        }
    }

    return true;
}


function playRound(sign) {
    drawBoard();

    var index = prompt("At which number you want to set your sign?")

    if (index < 1 || index > gameBoard.getBoard().length) {
        console.log("index:" + index)
        alert("Only valid numbers");
        return
    }


    gameBoard.setField(index, sign);

    if (index == 1 || index == 4 || index == 7) {
        //check if all three vertical cells are filled with either x's oder o's
        if (gameBoard.getBoard()[0] == gameBoard.getBoard()[3] && gameBoard.getBoard()[0] == gameBoard.getBoard()[6]) {
            if (sign == "X") {
                player1.setWon()
                return;
            }
            player2.setWon()
            //check if all three horicontal cells are filled with either x's oder o's
        } else if (gameBoard.getBoard()[index - 1] == gameBoard.getBoard()[index] && gameBoard.getBoard()[index - 1] == gameBoard.getBoard()[index + 1]) {
            if (sign == "X") {
                player1.setWon()
            }
            player2.setWon()
        }

    }


    if (index == 8 || index == 5 || index == 2) {
        //check if all three vertical cells are filled with either x's oder o's
        if (gameBoard.getBoard()[7] == gameBoard.getBoard()[4] && gameBoard.getBoard()[7] == gameBoard.getBoard()[1]) {
            if (sign == "X") {
                player1.setWon()
                return;
            }
            player2.setWon()
            //check if all three horicontal cells are filled with either x's oder o's
        } else if (gameBoard.getBoard()[index - 1] == gameBoard.getBoard()[index - 2] && gameBoard.getBoard()[index - 1] == gameBoard.getBoard()[index]) {
            if (sign == "X") {
                player1.setWon()
            }
            player2.setWon()
        }

    }


    if (index == 9 || index == 6 || index == 3) {
        //check if all three vertical cells are filled with either x's oder o's
        if (gameBoard.getBoard()[8] == gameBoard.getBoard()[5] && gameBoard.getBoard()[8] == gameBoard.getBoard()[2]) {
            if (sign == "X") {
                player1.setWon()
                return;
            }
            player2.setWon()
            //check if all three horicontal cells are filled with either x's oder o's
        } else if (gameBoard.getBoard()[index - 1] == gameBoard.getBoard()[index - 2] && gameBoard.getBoard()[index - 1] == gameBoard.getBoard()[index - 3]) {
            if (sign == "X") {
                player1.setWon()
            }
            player2.setWon()
        }

    }

    drawBoard();


}




function playGame() {
    while (!player1.getWon() && !player2.getWon() && !checkEnd()) {
        player1.startRound(player1.getSign());
        if (checkEnd() || player1.getWon() || player2.getWon()) {
            break;
        }
        player2.startRound(player2.getSign());
    }

    if (player1.getWon()) {
        console.log(`${player1.getName()} won the game!`)
    } else if (player2.getWon()) {
        console.log(`${player2.getName()} won the game!`)
    } else {
        console.log("Tie!")
    }

}

playGame();


