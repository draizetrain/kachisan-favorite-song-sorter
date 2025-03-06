// 미리 정해진 곡 목록
const songs = [
   "주제는 사랑", 
"가위, 바위, 보!", 
"RESCUE!", 
"Convenient Love", 
"거짓말 자판기", 
"징크스", 
"뻔한 방법", 
"절취선", 
"요괴인간", 
"안개", 
"쫄다", 
"The Mom of Moms", 
"다이얼", 
"TEATIME", 
"죄악극성"
];

let comparisons = [];
let i = 0, j = 1;

function shuffleArray(array) {
    // Fisher-Yates 알고리즘을 사용한 배열 섞기
    for (let k = array.length - 1; k > 0; k--) {
        const randomIndex = Math.floor(Math.random() * (k + 1));
        [array[k], array[randomIndex]] = [array[randomIndex], array[k]];
    }
}

function startSorting() {
    comparisons = songs.slice(); // 원본 배열 복사
    shuffleArray(comparisons); // 곡 목록을 랜덤하게 섞기
    i = 0;
    j = 1;

    document.getElementById("compare-section").style.display = "block";
    document.getElementById("result-section").style.display = "none";
    showNextComparison();
}

function showNextComparison() {
    if (j >= comparisons.length) {
        i++;
        j = i + 1;
    }
    if (i >= comparisons.length - 1) {
        showResults();
        return;
    }

    document.getElementById("song1").innerText = comparisons[i];
    document.getElementById("song2").innerText = comparisons[j];

    document.getElementById("song1").onclick = () => chooseSong(i, j);
    document.getElementById("song2").onclick = () => chooseSong(j, i);
}

function chooseSong(winner, loser) {
    if (winner > loser) {
        [comparisons[winner], comparisons[loser]] = [comparisons[loser], comparisons[winner]];
    }
    j++;
    showNextComparison();
}

function showResults() {
    document.getElementById("compare-section").style.display = "none";
    document.getElementById("result-section").style.display = "block";

    let tableBody = document.getElementById("result-table");
    tableBody.innerHTML = "";

    comparisons.forEach((song, index) => {
        let row = `<tr><td>${index + 1}</td><td>${song}</td></tr>`;
        tableBody.innerHTML += row;
    });
}
