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

function miniMaxSum(arr) {
    arr.sort((a, b) => a - b);
    const minSum = arr.slice(0, 4).reduce((a, b) => a + b, 0);
    const maxSum = arr.slice(1).reduce((a, b) => a + b, 0);
    console.log(minSum + " " + maxSum);
}

function main() {
    const arr = readLine().replace(/\s+$/g, "").split(" ").map((arrTemp) => parseInt(arrTemp, 10));
    miniMaxSum(arr);
}