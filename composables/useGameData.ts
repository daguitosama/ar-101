interface GameMove {
    coords: Number[]; // [0,0]
    player: String; // 'x' || 'o'
}

export default function useGameData() {
    //
    const playerAvatar = useState(() => "🐯");
    //
    const playerGoFirst = useState(() => true);
    //
    const game = useState(() => ({
        currentlyPlaying: null || "x" || "o",
        moves: [], // GameMove[]
        state: "playing" || "tie" || "win Player" || "win AI",
    }));

    return { playerAvatar, playerGoFirst, game };
}
