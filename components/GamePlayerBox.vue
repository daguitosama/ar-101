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
    <div class="p-[10px] rounded-xl relative">
        <div
            class="absolute inset-0 w-full h-full transition-all duration-300 rounded-xl"
            :class="{ 'bg-black animate-pulse': isActive, 'bg-white': !isActive }"
        ></div>

        <div class="grid gap-[10px] place-items-center relative z-20">
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
    </div>
</template>
