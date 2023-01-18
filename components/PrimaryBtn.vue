<script setup>
const props = defineProps({
    text: {
        type: String,
        default: "Btn",
    },
});
</script>

<template>
    <button
        class="bg-black px-[70px] py-[16px] flex items-center justify-center font-medium text-lg text-white rounded-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black focus-visible:ring-offset-4"
    >
        <span>{{ text }}</span>
    </button>
</template>
