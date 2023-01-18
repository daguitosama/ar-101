<script setup>
const { gameRecords } = useGameData();
</script>

<template>
    <div class="grid gap-[60px] max-w-[420px] mx-auto">
        <div class="flex items-center justify-center mt-[60px]">
            <h1 class="text-3xl font-medium">Game Records</h1>
        </div>

        <div>
            <ul>
                <li
                    v-for="(record, idx) in gameRecords"
                    :key="idx"
                >
                    <pre class="border border-black p-2"><code>{{ idx }} : {{ record }}</code></pre>
                </li>
            </ul>
        </div>
    </div>
</template>
