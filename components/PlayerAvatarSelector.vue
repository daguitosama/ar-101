<script setup>
// player avatar all ways must have a valid value
const { playerAvatar } = useGameData();

const avatarOptions = [
    {
        avatar: "🐯",
    },
    {
        avatar: "🦁",
    },
    {
        avatar: "🐻",
    },
    {
        avatar: "🐼",
    },
    {
        avatar: "🐶",
    },
];

function updateSelection(newAvatar) {
    // console.log({ newAvatar });
    if (typeof newAvatar != "string") {
        throw new Error("non valid new_avatar");
    }
    playerAvatar.value = newAvatar;
}
</script>

<template>
    <div>
        <PlayerAvatarOptionsGroup
            :avatarOptions="avatarOptions"
            :currentSelection="playerAvatar"
            @update_selection="updateSelection"
        />
    </div>
</template>
