<script setup>
const props = defineProps({
    avatarOptions: {
        type: Array,
        default: () => [{ avatar: "🐯" }],
    },
    currentSelection: {
        type: String,
        default: "🐯",
    },
});

const emit = defineEmits(["update_selection"]);
</script>

<template>
    <div>
        <h2 class="text-3xl font-medium">Select your avatar</h2>

        <ul class="mt-[25px] flex gap-4">
            <li
                v-for="(avatarOpt, idx) in avatarOptions"
                :key="idx"
            >
                <button
                    :aria-label="`Select your avatar as` + avatarOpt.avatar"
                    @click="emit('update_selection', avatarOpt.avatar)"
                    class="flex flex-col gap-4 items-center justify-center ring-black p-[10px] rounded-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black focus-visible:ring-offset-4"
                    :class="{
                        'ring-4 ': currentSelection == avatarOpt.avatar,
                        'ring-2': currentSelection != avatarOpt.avatar,
                    }"
                >
                    <span class="text-3xl">{{ avatarOpt.avatar }}</span>
                    <div
                        class="w-[16px] h-[16px] rounded-full border-2 border-black bg-white transition-all duration-300"
                        :class="{
                            'bg-black ': currentSelection == avatarOpt.avatar,
                        }"
                    ></div>
                </button>
            </li>
        </ul>
    </div>
</template>
