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

const lastMoveVector = computed(() => [...props.record.lastMove.split(":").map((l) => +l)]);
const lastPlayer = computed(
    () => props.record.moves[lastMoveVector.value[0]][lastMoveVector.value[1]].player
);

const router = useRouter();
const { primeGameData, gameStates, opositePlayer, valueFromProxy } = useGameData();

function startGameFromMove() {
    const gameData = {
        currentlyPlaying: opositePlayer(lastPlayer.value),
        moves: valueFromProxy(props.record.moves),
        state: "playing",
        lastMove: props.record.lastMove,
    };

    primeGameData(gameData);
    router.push("/game");
}
</script>

<template>
    <div class="flex items-start gap-4 h-full">
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

        <!-- avatar & start from here btn-->
        <div class="h-full">
            <div class="flex flex-col justify-between h-full">
                <!-- 
                    remember currently playing always is 
                    the player that play next
                    so here we choose how play past
                    aka the other player
                    that's what might look inverted
                -->
                <div
                    v-if="record.currentlyPlaying == players.o"
                    class="text-3xl"
                >
                    <span>{{ playerAvatar }}</span>
                </div>
                <div
                    v-else
                    class="text-3xl"
                >
                    <span>🤖</span>
                </div>

                <div
                    v-if="
                        record.state != gameStates.tie &&
                        record.state != gameStates.winAI &&
                        record.state != gameStates.winPlayer
                    "
                >
                    <button
                        @click="startGameFromMove"
                        class="text-start text-xs px-[10px] py-[2px] rounded-xl border border-black"
                    >
                        Start a game from here
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
