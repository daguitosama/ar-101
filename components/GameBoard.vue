<script setup>
const props = defineProps({
    game: {
        type: Object,
        default: () => ({
            currentlyPlaying: null || "x" || "o",
            moves: [], // GameMove[]
            state: "playing" || "tie" || "win Player" || "win AI",
        }),
    },
});

const emit = defineEmits(["game_update"]);

function onCellHit(data) {
    // console.log("cell hit", { data });
    emit("game_update", { cellID: data.cellID, player: props.game.currentlyPlaying });
}
</script>

<template>
    <div>
        <ul>
            <li
                v-for="(moveSlot, idx) in game.moves"
                :key="`gs-${idx}`"
            >
                <ul class="flex">
                    <li
                        v-for="(move, idx) in moveSlot"
                        :key="`gm-${idx}`"
                    >
                        <GameBoardCell
                            :cellID="move.coords"
                            :player="move.player"
                            @cell_hit="onCellHit"
                        />
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
