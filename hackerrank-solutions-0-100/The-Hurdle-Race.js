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

function hurdleRace(k, height) {
    const maxHurdle = Math.max(...height);
    return Math.max(0, maxHurdle - k);
}

function main() {
    const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");
    const n = parseInt(firstMultipleInput[0], 10);
    const k = parseInt(firstMultipleInput[1], 10);

    const height = readLine().replace(/\s+$/g, "").split(" ").map(heightTemp => parseInt(heightTemp, 10));

    const result = hurdleRace(k, height);
    console.log(result);
}