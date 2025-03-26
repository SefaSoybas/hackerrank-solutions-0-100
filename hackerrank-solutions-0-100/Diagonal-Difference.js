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

function diagonalDifference(arr) {
    let primary = 0, secondary = 0;
    const n = arr.length;
    
    for (let i = 0; i < n; i++) {
        primary += arr[i][i];
        secondary += arr[i][n - 1 - i];
    }
    
    return Math.abs(primary - secondary);
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, "").split(" ").map((arrTemp) => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);
    console.log(result);
}