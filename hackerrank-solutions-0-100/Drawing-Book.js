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

function pageCount(n, p) {
    const fromFront = Math.floor(p / 2);
    const fromBack = Math.floor(n / 2) - fromFront;
    return Math.min(fromFront, fromBack);
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    const p = parseInt(readLine().trim(), 10);

    const result = pageCount(n, p);
    console.log(result);
}