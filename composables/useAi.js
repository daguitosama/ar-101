import { bestMove } from "~/lib";

export default function useAI() {
    const { game, updateGameMove } = useGameData();
    async function makeAMove(delay = 0.5) {
        console.log("useAI / makeAMove: start");
        const currentBestMove = bestMove(game.value.moves);
        console.log("useAI / makeAMove: ", { currentBestMove });

        // fake a thinking time
        await new Promise((resolve) => {
            setTimeout(resolve, delay * 1000);
        });
        // { i: 0, j: 2 }
        const cellID = `${currentBestMove.i}:${currentBestMove.j}`;
        console.log("useAI / makeAMove: ", { cellID });

        updateGameMove({ cellID });
    }

    return { makeAMove };
}
