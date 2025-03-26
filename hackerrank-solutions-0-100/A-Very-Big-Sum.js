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

function aVeryBigSum(ar) {
    return ar.reduce((sum, num) => sum + num, 0);
}

function main() {
    const arCount = parseInt(readLine().trim(), 10);
    const ar = readLine().replace(/\s+$/g, "").split(" ").map((arTemp) => parseInt(arTemp, 10));

    const result = aVeryBigSum(ar);
    console.log(result);
}