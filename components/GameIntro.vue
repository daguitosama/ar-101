<script setup>
const props = defineProps({
    prop1: {},
});
</script>

<template>
    <div class="grid">
        <div class="py-[50px]">
            <h1 class="font-medium text-3xl text-center relative py-[6px]">
                <span
                    class="absolute inset-0 w-full h-full -skew-x-12 bg-[#FFE604] rounded-md shadow-lg"
                ></span>
                <span class="relative italic">Tic Tac Toe</span>
            </h1>
        </div>
        <NewGameForm />
    </div>
</template>
