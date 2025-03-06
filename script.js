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
    let songs = prompt("주제는 사랑", "가위, 바위, 보!", "RESCUE!" "Convenient Love", "거짓말 자판기", "징크스", "뻔한 방법", "절취선", "요괴인간", "안개", "쫄다", "The Mom of Moms", "다이얼", "TEATIME", "죄악극성",).split(",").map(s => s.trim()); //곡 쉼표로 구분해서 입력하기
    const sortedSongs = await sortSongs(songs);
    alert("🎵 까치산 최애 곡 순위 🎵\n" + sortedSongs.join("\n"));
}
