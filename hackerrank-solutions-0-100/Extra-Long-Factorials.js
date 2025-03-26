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

function extraLongFactorials(n) {
    let result = BigInt(1);
    for (let i = BigInt(2); i <= n; i++) {
        result *= i;
    }
    console.log(result.toString());
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    extraLongFactorials(n);
}