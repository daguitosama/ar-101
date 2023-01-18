<script setup>
const router = useRouter();

function startGame() {
    console.log("starting game");
    router.push("/game");
}
</script>

<template>
    <div class="grid gap-[60px] max-w-[420px] mx-auto">
        <PlayerAvatarSelector />
        <PlayerFirstSelector />
        <div
            class="px-[30px] bg-white fixed w-full bottom-[80px] left-0 flex items-center justify-center"
        >
            <PrimaryBtn
                @click="startGame"
                text="Play"
            />
        </div>
    </div>
</template>
