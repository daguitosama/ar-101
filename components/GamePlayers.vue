<script setup>
const { game, playerAvatar, players } = useGameData();
</script>

<template>
    <div>
        <div class="grid grid-cols-2 gap-8">
            <GamePlayerBox
                :avatar="playerAvatar"
                :isActive="game.currentlyPlaying == players.x"
                :playerKey="players.x"
            />
            <GamePlayerBox
                avatar="🤖"
                :isActive="game.currentlyPlaying == players.o"
                :playerKey="players.o"
            />
        </div>
    </div>
</template>
