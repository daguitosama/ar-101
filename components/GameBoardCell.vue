<script setup>
const props = defineProps({
    cellID: {
        type: String,
        default: "0:0",
    },
    player: {
        type: String || null,
        default: null || "x" || "o",
    },
    isFilled: {
        type: Boolean,
    },
});

const emit = defineEmits(["cell_hit"]);
</script>

<template>
    <button
        class="border border-black w-[100px] h-[100px]"
        @click="emit('cell_hit', { cellID, player })"
    >
        <span class="font-medium text-3xl">{{ player }}</span>
    </button>
</template>
