<script setup>
const { game, playerAvatar, updateGameMove, gameStates, gameRecords, resetGameData } =
    useGameData();

function onGameUpdate(data) {
    console.log("game update", { data });
    updateGameMove({ cellID: data.cellID });
}

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
                class="px-[30px] bg-white fixed w-full bottom-[80px] left-0 flex items-center justify-center"
            >
                <PrimaryBtn
                    @click="startGame"
                    text="New Game"
                />
            </div>
        </div>
    </div>
</template>
