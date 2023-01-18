<script setup>
const props = defineProps({
    avatar: {
        type: String,
        default: "",
    },
    isActive: {
        type: Boolean,
        default: false,
    },

    playerKey: {
        type: String,
        default: "W",
    },
});
</script>

<template>
    <div
        class="p-[10px] rounded-xl grid gap-[10px] place-items-center"
        :class="{ 'bg-black': isActive }"
    >
        <div class="text-5xl">
            <p>{{ avatar }}</p>
        </div>

        <div class="text-3xl">
            <p :class="{ 'text-white': isActive }">{{ playerKey }}</p>
        </div>
    </div>
</template>
