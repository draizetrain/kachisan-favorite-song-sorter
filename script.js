async function compareSongs(song1, song2) {
    return new Promise((resolve) => {
        const choice = prompt(`어떤 곡이 더 좋은가요?\n1: ${song1}\n2: ${song2}\n(1 또는 2 입력)`);
        resolve(choice === "1" ? -1 : choice === "2" ? 1 : 0);
    });
}

async function sortSongs(songList) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < songList.length - 1; i++) {
            const result = await compareSongs(songList[i], songList[i + 1]);
            if (result === 1) {
                [songList[i], songList[i + 1]] = [songList[i + 1], songList[i]];
                swapped = true;
            }
        }
    } while (swapped);
    return songList;
}

async function startSorting() {
    let songs = prompt("좋아하는 곡들을 쉼표(,)로 구분하여 입력하세요:").split(",").map(s => s.trim());
    const sortedSongs = await sortSongs(songs);
    alert("🎵 당신의 좋아하는 곡 순위 🎵\n" + sortedSongs.join("\n"));
}
