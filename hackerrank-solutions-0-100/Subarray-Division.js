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

function birthday(s, d, m) {
    let count = 0;
    for (let i = 0; i <= s.length - m; i++) {
        const segment = s.slice(i, i + m);
        const sum = segment.reduce((a, b) => a + b, 0);
        if (sum === d) count++;
    }
    return count;
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    const s = readLine().replace(/\s+$/g, "").split(" ").map(sTemp => parseInt(sTemp, 10));
    const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");
    const d = parseInt(firstMultipleInput[0], 10);
    const m = parseInt(firstMultipleInput[1], 10);

    const result = birthday(s, d, m);
    console.log(result);
}