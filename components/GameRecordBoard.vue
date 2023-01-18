<script setup>
const props = defineProps({
    moves: {
        type: Array,
        default: () => [
            [
                {
                    coords: "0:0",
                    player: "o",
                },
                {
                    coords: "0:1",
                    player: "x",
                },
                {
                    coords: "0:2",
                    player: "x",
                },
            ],
            [
                {
                    coords: "1:0",
                    player: "x",
                },
                {
                    coords: "1:1",
                    player: "o",
                },
                {
                    coords: "1:2",
                    player: "o",
                },
            ],
            [
                {
                    coords: "2:0",
                    player: "x",
                },
                {
                    coords: "2:1",
                    player: "o",
                },
                {
                    coords: "2:2",
                    player: "x",
                },
            ],
        ],
    },
    lastMove: {
        type: String,
        default: "0:0",
    },
});

const move00 = computed(() => props.moves[0][0]);
</script>

<template>
    <div>
        <ul class="w-full">
            <li
                v-for="(moveSlot, idx) in moves"
                :key="idx"
            >
                <ul class="flex items-center">
                    <li
                        v-for="(move, jdx) in moveSlot"
                        :key="jdx"
                        class="relative"
                    >
                        <!-- <pre
                            class="text-xs absolute top-0 left-0 bg-white overflow-visible"
                        ><code>{{ idx }}:{{ jdx }}</code></pre> -->
                        <GameRecordBoardCell
                            :move="move"
                            :isLastMove="move.coords == lastMove"
                        />
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
