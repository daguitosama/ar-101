ok, having the players `x` or `o`,  a board as 
`var board = [
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
`

a  `checkForWin(board)`  function that returns `x`, `o` or `null` depending the player that won or if no player won.
a `checkForTie(board)` function that returns `true` or `false`  depending when was a tie or not.

write a fast and efficient minimax(board, depth=0, isMaximizing = true) function that returns the best move using the minimax algorithm making usage of a depth and isMaximizing params. This function must maximize the player `o`, take into account that the function must go just to a depth of 12. Remember, the function must only return  a object containing the bestScore and the move, `{besScore, move}`