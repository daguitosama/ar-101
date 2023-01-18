<script setup>
const { gameRecords } = useGameData();
</script>

<template>
    <div class="grid gap-[60px] max-w-[420px] mx-auto pb-[160px]">
        <div class="mt-[60px]">
            <h1 class="text-3xl font-medium">Game Records</h1>
        </div>

        <div>
            <ul class="grid gap-6">
                <li
                    v-for="(record, idx) in gameRecords"
                    :key="idx"
                >
                    <GameRecord
                        :record="record"
                        :recordId="idx"
                    />
                </li>
            </ul>
        </div>
    </div>
</template>
