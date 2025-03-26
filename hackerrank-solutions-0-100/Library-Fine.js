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

function libraryFine(d1, m1, y1, d2, m2, y2) {
    if (y1 > y2) return 10000;
    if (y1 < y2) return 0;
    
    if (m1 > m2) return 500 * (m1 - m2);
    if (m1 < m2) return 0;
    
    if (d1 > d2) return 15 * (d1 - d2);
    return 0;
}

function main() {
    const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");
    const d1 = parseInt(firstMultipleInput[0], 10);
    const m1 = parseInt(firstMultipleInput[1], 10);
    const y1 = parseInt(firstMultipleInput[2], 10);

    const secondMultipleInput = readLine().replace(/\s+$/g, "").split(" ");
    const d2 = parseInt(secondMultipleInput[0], 10);
    const m2 = parseInt(secondMultipleInput[1], 10);
    const y2 = parseInt(secondMultipleInput[2], 10);

    const result = libraryFine(d1, m1, y1, d2, m2, y2);
    console.log(result);
}