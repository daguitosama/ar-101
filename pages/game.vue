<script setup>
import { isFinalMove } from "~~/lib";

const { game, playerAvatar, updateGameMove, gameStates, gameRecords, resetGameData, players } =
    useGameData();
const { makeAMove: AIMakeAMove } = useAi();

// now there is an AI this function
// will be triggered just
// by the action of the human player
// so can be used to trigger the AI move in response
async function onGameUpdate(data) {
    // console.log("game update", { data });
    updateGameMove({ cellID: data.cellID });
    // ai move at the end
    // if the board is not empty yet
    // wait a little bit
    setTimeout(() => {
        if (!isFinalMove(game.value.moves)) {
            AIMakeAMove(1);
        }
    }, 1 * 1000);
}

// aditionally hanldle the case when the
// the game starts and is the turn of the ai

onMounted(() => {
    if (game.value.currentlyPlaying == players.o) {
        setTimeout(() => {
            if (!isFinalMove(game.value.moves)) {
                AIMakeAMove(1);
            }
        }, 1 * 1000);
    }
});

// disable the board when ai playing
const isAIPlaying = computed(() => game.value.currentlyPlaying == players.o);
// make the move whenever the AI is turn
const router = useRouter();

function goToGameRecords() {
    router.push("/records");
}

function startGame() {
    resetGameData();
    router.push("/");
}
</script>

<template>
    <div class="grid mt-[80px] gap-[90px]">
        <div
            v-if="game.state == gameStates.playing"
            class="grid gap-[30px] grid-cols-1"
        >
            <div class="flex justify-center">
                <GameBoard
                    :game="game"
                    @game_update="onGameUpdate"
                    :disable_board="isAIPlaying"
                    class="mt-[60px]"
                />
            </div>

            <GamePlayers
                :currentlyPlaying="game.currentlyPlaying"
                class="w-full max-w-[300px] mx-auto"
            />
        </div>

        <!-- finished screen -->
        <div
            v-if="game.state != gameStates.playing"
            class="grid place-items-center gap-[30px]"
        >
            <!-- game result -->
            <div class="text-4xl font-medium">
                <div v-if="game.state == gameStates.tie">O was a tie</div>
                <div v-if="game.state == gameStates.winPlayer">{{ playerAvatar }} Player won !</div>
                <div v-if="game.state == gameStates.winAI">🤖 AI won</div>
            </div>

            <!-- game records -->
            <div class="w-full flex items-center justify-center">
                <button
                    @click="goToGameRecords"
                    class="border border-black py-[6px] px-[20px] rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                >
                    See game Records
                </button>
            </div>

            <!-- new game -->
            <div
                class="h-0 px-[30px] bg-white absolute w-full bottom-[80px] left-0 flex items-center justify-center"
            >
                <PrimaryBtn
                    @click="startGame"
                    text="New Game"
                    class="shadow-xl"
                />
            </div>
        </div>
    </div>
</template>
