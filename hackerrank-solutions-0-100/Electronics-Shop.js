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

function getMoneySpent(keyboards, drives, b) {
    let max = -1;
    for (const keyboard of keyboards) {
        for (const drive of drives) {
            const total = keyboard + drive;
            if (total <= b && total > max) {
                max = total;
            }
        }
    }
    return max;
}

function main() {
    const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");
    const b = parseInt(firstMultipleInput[0], 10);
    const n = parseInt(firstMultipleInput[1], 10);
    const m = parseInt(firstMultipleInput[2], 10);

    const keyboards = readLine().replace(/\s+$/g, "").split(" ").map(keyboardsTemp => parseInt(keyboardsTemp, 10));
    const drives = readLine().replace(/\s+$/g, "").split(" ").map(drivesTemp => parseInt(drivesTemp, 10));

    const result = getMoneySpent(keyboards, drives, b);
    console.log(result);
}