<script setup>
const props = defineProps({
    move: {
        type: Object,
        default: () => ({
            coords: "0:0",
            player: "o",
        }),
    },
    isLastMove: {
        type: Boolean,
        default: false,
    },
});
</script>

<template>
    <div
        class="w-[40px] h-[40px] border border-black flex items-center justify-center"
        :class="{ 'bg-[#FFE604]': isLastMove }"
    >
        <span>{{ move.player }}</span>
    </div>
</template>
