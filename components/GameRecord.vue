<script setup>
const props = defineProps({
    record: {
        type: Object,
        default: () => ({
            currentlyPlaying: "o",
            moves: [
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
            state: "playing",
            lastMove: "2:2",
        }),
    },
    recordId: {
        type: Number,
        default: 0,
    },
});

const { playerAvatar, players } = useGameData();
</script>

<template>
    <div class="flex items-start gap-4">
        <div class="text-3xl font-mono">
            <span>{{ recordId + 1 }}</span>
        </div>
        <!-- board -->
        <div>
            <GameRecordBoard
                :moves="record.moves"
                :lastMove="record.lastMove"
            />
        </div>

        <!-- avatar -->
        <div>
            <div class="text-3xl">
                <!-- 
                    remember currently playing always is 
                    the player that play next
                    so here we choose how play past
                    aka the other player
                    that's what might look inverted
                -->
                <div v-if="record.currentlyPlaying == players.o">
                    <span>{{ playerAvatar }}</span>
                </div>
                <div v-else>
                    <span>🤖</span>
                </div>
            </div>
        </div>
    </div>
</template>
