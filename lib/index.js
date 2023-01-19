const players = {
    x: "x",
    o: "o",
};

export function getNewGameMoves() {
    const moves = [
        [
            { coords: "0:0", player: null },
            { coords: "0:1", player: null },
            { coords: "0:2", player: null },
        ],
        [
            { coords: "1:0", player: null },
            { coords: "1:1", player: null },
            { coords: "1:2", player: null },
        ],
        [
            { coords: "2:0", player: null },
            { coords: "2:1", player: null },
            { coords: "2:2", player: null },
        ],
    ];

    return moves;
}

export function checkForWin(moves = getNewGameMoves()) {
    // moves[i][0].player check first to discriminate the base case when player is `null`
    // Check rows
    for (let i = 0; i < 3; i++) {
        if (
            moves[i][0].player &&
            moves[i][0].player === moves[i][1].player &&
            moves[i][1].player === moves[i][2].player
        ) {
            // console.log("winner detected in row", moves[i][0].player);
            return moves[i][0].player;
        }
    }
    // Check columns
    for (let i = 0; i < 3; i++) {
        if (
            moves[0][i].player &&
            moves[0][i].player === moves[1][i].player &&
            moves[1][i].player === moves[2][i].player
        ) {
            // console.log("winner detected in column", moves[0][i].player);
            return moves[0][i].player;
        }
    }
    // Check diagonals
    if (
        moves[0][0].player &&
        moves[0][0].player === moves[1][1].player &&
        moves[1][1].player === moves[2][2].player
    ) {
        // console.log("winner detected in diagonal", moves[0][0].player);
        return moves[0][0].player;
    }
    if (
        moves[0][2].player &&
        moves[0][2].player === moves[1][1].player &&
        moves[1][1].player === moves[2][0].player
    ) {
        // console.log("winner detected in diagonal", moves[0][2].player);
        return moves[0][2].player;
    }
    // If no win is found, return null
    return null;
}

export function isFinalMove(moves = getNewGameMoves()) {
    // asume true to
    // exit early on the search if found a
    //  empty move (with no player)
    var itIsFinal = true;

    // check if is all moves are done
    moves.forEach((gameSlot) => {
        gameSlot.forEach((move) => {
            if (!move.player) {
                itIsFinal = false;
                return itIsFinal;
            }
        });
    });

    return itIsFinal;
}

var checkForTieCalls = 0;
export function checkForTie(moves = getNewGameMoves()) {
    console.log(`call: ${checkForTieCalls} checkForTie`, { moves });
    checkForTieCalls++;
    return isFinalMove(moves) && !checkForWin(moves);
}

export function bestMove(board) {
    let bestScore = -Infinity; // assume the worst possible score for the maximizing player
    let bestMove; // variable to store the best move
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            // check if the current cell is empty
            if (!board[i][j].player) {
                // make a move on the current cell
                board[i][j].player = "o";
                // get the score of the move
                let score = minimax(board);
                // undo the move
                board[i][j].player = null;
                // check if the score is better than the current best score
                if (score > bestScore) {
                    bestScore = score;
                    bestMove = { i, j };
                }
            }
        }
    }
    return bestMove;
}

// to make things simpler
// i assume the player
// to maximize is all ways `o`, the AI
export function minimax(board, depth = 0, isMaximizing = true) {
    let bestScore = isMaximizing ? -Infinity : Infinity;
    let bestMove;

    if (checkForWin(board) === "o") {
        return { bestScore: 1, move: null };
    } else if (checkForWin(board) === "x") {
        return { bestScore: -1, move: null };
    } else if (checkForTie(board) === true) {
        return { bestScore: 0, move: null };
    } else if (depth === 12) {
        return { bestScore: 0, move: null };
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j].player === null) {
                board[i][j].player = isMaximizing ? "o" : "x";
                let currentMove = minimax(board, depth + 1, !isMaximizing);
                board[i][j].player = null;
                if (isMaximizing && currentMove.bestScore > bestScore) {
                    bestScore = currentMove.bestScore;
                    bestMove = { i, j };
                } else if (!isMaximizing && currentMove.bestScore < bestScore) {
                    bestScore = currentMove.bestScore;
                    bestMove = { i, j };
                }
            }
        }
    }
    return { bestScore, move: bestMove };
}
