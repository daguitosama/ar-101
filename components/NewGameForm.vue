<script setup>
function startGame() {
    console.log("starting game");
}
</script>

<template>
    <div class="grid gap-[30px]">
        <PlayerAvatarSelector />
        <PlayerFirstSelector />
        <div
            class="px-[30px] bg-white fixed w-full bottom-8 left-0 flex items-center justify-center"
        >
            <PrimaryBtn
                @click="startGame"
                text="Play"
            />
            <!-- <p>foo</p> -->
        </div>
    </div>
</template>
