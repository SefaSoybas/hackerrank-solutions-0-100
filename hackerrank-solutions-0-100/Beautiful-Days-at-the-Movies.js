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

function beautifulDays(i, j, k) {
    let count = 0;
    for (let day = i; day <= j; day++) {
        const reversed = parseInt(day.toString().split('').reverse().join(''), 10);
        if (Math.abs(day - reversed) % k === 0) {
            count++;
        }
    }
    return count;
}

function main() {
    const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");
    const i = parseInt(firstMultipleInput[0], 10);
    const j = parseInt(firstMultipleInput[1], 10);
    const k = parseInt(firstMultipleInput[2], 10);

    const result = beautifulDays(i, j, k);
    console.log(result);
}