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

function howManyGames(p, d, m, s) {
    let count = 0;
    while (s >= p) {
        s -= p;
        count++;
        p = Math.max(p - d, m);
    }
    return count;
}

function main() {
    const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");
    const p = parseInt(firstMultipleInput[0], 10);
    const d = parseInt(firstMultipleInput[1], 10);
    const m = parseInt(firstMultipleInput[2], 10);
    const s = parseInt(firstMultipleInput[3], 10);

    const result = howManyGames(p, d, m, s);
    console.log(result);
}