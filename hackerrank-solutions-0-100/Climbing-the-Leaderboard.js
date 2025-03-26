"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on("end", function () {
    inputString = inputString.split("\n");
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function climbingLeaderboard(ranked, player) {
    ranked = [...new Set(ranked)];
    const result = [];
    let i = ranked.length - 1;
    
    for (const score of player) {
        while (i >= 0 && score >= ranked[i]) {
            i--;
        }
        result.push(i + 2);
    }
    
    return result;
}

function main() {
    const rankedCount = parseInt(readLine().trim(), 10);
    const ranked = readLine().replace(/\s+$/g, "").split(" ").map(rankedTemp => parseInt(rankedTemp, 10));
    const playerCount = parseInt(readLine().trim(), 10);
    const player = readLine().replace(/\s+$/g, "").split(" ").map(playerTemp => parseInt(playerTemp, 10));

    const result = climbingLeaderboard(ranked, player);
    console.log(result.join("\n"));
}