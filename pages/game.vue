<script setup>
const { game, playerAvatar, updateGameMove, gameStates, gameRecords } = useGameData();

function onGameUpdate(data) {
    console.log("game update", { data });
    updateGameMove({ cellID: data.cellID });
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
        <div v-if="game.state != gameStates.playing">
            <div v-if="game.state == gameStates.tie">O was a tie</div>
            <div v-if="game.state == gameStates.winPlayer">{{ playerAvatar }} Player won</div>
            <div v-if="game.state == gameStates.winAI">🤖 AI won</div>
        </div>
    </div>
</template>
