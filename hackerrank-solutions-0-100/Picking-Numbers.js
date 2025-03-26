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

function pickingNumbers(a) {
    const freq = {};
    for (const num of a) {
        freq[num] = (freq[num] || 0) + 1;
    }
    
    let max = 0;
    for (const num in freq) {
        const current = freq[num] + (freq[parseInt(num) + 1] || 0);
        if (current > max) max = current;
    }
    
    return max;
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    const a = readLine().replace(/\s+$/g, "").split(" ").map(aTemp => parseInt(aTemp, 10));

    const result = pickingNumbers(a);
    console.log(result);
}