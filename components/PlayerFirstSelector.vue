<script setup>
const { playerGoFirst, game, players } = useGameData();
watch(
    () => playerGoFirst.value,
    (newV, oldV) => {
        if (newV) {
            // console.log("playerGoFirst / currently playing x");
            game.value.currentlyPlaying = players.x;
        } else {
            // console.log("playerGoFirst / currently playing o");
            game.value.currentlyPlaying = players.o;
        }
    }
);

function toggleSelection() {
    // console.log("playerGoFirst / toggling selection");
    playerGoFirst.value = !playerGoFirst.value;
}
</script>

<template>
    <button
        @click="toggleSelection"
        class="flex gap-4 items-center justify-center border-black border-2 p-[10px] rounded-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black focus-visible:ring-offset-4"
    >
        <span class="text-xl font-medium">Play First</span>
        <div
            class="w-[16px] h-[16px] rounded-full border-2 border-black transition-all duration-300"
            :class="{
                'bg-black ': playerGoFirst,
            }"
        ></div>
    </button>
</template>
