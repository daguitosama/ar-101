// interface GameMove {
//     coords: Number[]; // [0,0]
//     player: String; // 'x' || 'o'
// }
function getNewGameMoves() {
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

function cellIDToCoords(cellID = "0:0") {
    return cellID.split(":").map((n) => +n);
}

const players = {
    x: "x",
    o: "o",
};

const gameStates = {
    playing: "playing",
    tie: "tie",
    winPlayer: "win Player",
    winAI: "win AI",
};

function checkForWin(moves = getNewGameMoves()) {
    // moves[i][0].player check first to discriminate the base case when player is `null`
    // Check rows
    for (let i = 0; i < 3; i++) {
        if (
            moves[i][0].player &&
            moves[i][0].player === moves[i][1].player &&
            moves[i][1].player === moves[i][2].player
        ) {
            console.log("winner detected in row", moves[i][0].player);
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
            console.log("winner detected in column", moves[0][i].player);
            return moves[0][i].player;
        }
    }
    // Check diagonals
    if (
        moves[0][0].player &&
        moves[0][0].player === moves[1][1].player &&
        moves[1][1].player === moves[2][2].player
    ) {
        console.log("winner detected in diagonal", moves[0][0].player);
        return moves[0][0].player;
    }
    if (
        moves[0][2].player &&
        moves[0][2].player === moves[1][1].player &&
        moves[1][1].player === moves[2][0].player
    ) {
        console.log("winner detected in diagonal", moves[0][2].player);
        return moves[0][2].player;
    }
    // If no win is found, return null
    return null;
}

export default function useGameData() {
    //
    const playerAvatar = useState(() => "🐯");
    //
    const playerGoFirst = useState(() => true);
    //
    const game = useState(() => ({
        currentlyPlaying: "x" || "o",
        moves: getNewGameMoves(),
        state: gameStates.playing,
    }));

    const gameRecords = useState(() => []);

    function updateGameMove({ cellID = "0:0" }) {
        // console.log("updateGameMove", { cellID });

        // // //
        // game update logic
        //
        const coords = cellIDToCoords(cellID);
        // fill the move
        // @ts-ignore
        game.value.moves[coords[0]][coords[1]].player = game.value.currentlyPlaying;
        // change player
        if (game.value.currentlyPlaying == players.x) {
            game.value.currentlyPlaying = players.o;
        } else {
            game.value.currentlyPlaying = players.x;
        }

        // save the game state to records
        // @ts-ignore
        gameRecords.value.push({
            currentlyPlaying: (() => game.value.currentlyPlaying)(),
            moves: (() => game.value.moves)(),
            state: (() => game.value.state)(),
        });

        // // //
        // game ending logic
        //
        // see if some one win
        // this case do not have ties
        // because there is empty moves still
        const winner = checkForWin(game.value.moves);
        if (winner) {
            switch (winner) {
                // won x
                case players.x: {
                    // console.log("handle x win");
                    game.value.state = gameStates.winPlayer;
                    return;
                }
                // won o
                case players.o: {
                    // console.log("handle o win");
                    game.value.state = gameStates.winAI;
                    return;
                }
            }
        }

        // if not let's check if there is not more moves
        const { itIsFinal } = isFinalMove();
        if (itIsFinal) {
            // since the game finish and there is no winner
            // this must be a tie
            game.value.state = gameStates.tie;
            return;
        }
    }

    function isFinalMove() {
        // asume true to
        // exit early on the search if found a
        //  empty move (with no player)
        var itIsFinal = true;

        // check if is all moves are done
        game.value.moves.forEach((gameSlot) => {
            gameSlot.forEach((move) => {
                if (!move.player) {
                    itIsFinal = false;

                    return { itIsFinal };
                }
            });
        });

        return { itIsFinal };
    }

    function resetGameData() {
        // reset game records
        gameRecords.value = [];
        // put game as default state
        game.value.currentlyPlaying = playerGoFirst.value ? players.x : players.o;
        game.value.moves = getNewGameMoves();
        game.value.state = gameStates.playing;
    }

    return {
        playerAvatar,
        playerGoFirst,
        game,
        updateGameMove,
        players,
        gameRecords,
        gameStates,
        resetGameData,
    };
}
