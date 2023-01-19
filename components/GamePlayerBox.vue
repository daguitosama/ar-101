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
        class="p-[10px] rounded-xl grid gap-[10px] place-items-center transition-all duration-300"
        :class="{ 'bg-black': isActive, 'bg-white': !isActive }"
    >
        <div class="text-5xl">
            <p>{{ avatar }}</p>
        </div>

        <div class="text-3xl">
            <p
                :class="{ 'text-white': isActive }"
                class="transition-all duration-300"
            >
                {{ playerKey }}
            </p>
        </div>
    </div>
</template>
