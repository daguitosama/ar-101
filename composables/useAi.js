import { bestMove, minimax } from "~/lib";

export default function useAI() {
    const { game, updateGameMove } = useGameData();
    function makeAMove() {
        console.log("useAI / makeAMove: start");
        const currentBestMove = minimax(game.value.moves).move;
        console.log("useAI / makeAMove: ", { currentBestMove });

        // fake a thinking time

        // { i: 0, j: 2 }
        const cellID = `${currentBestMove.i}:${currentBestMove.j}`;
        console.log("useAI / makeAMove: ", { cellID });

        updateGameMove({ cellID });
    }

    return { makeAMove };
}
