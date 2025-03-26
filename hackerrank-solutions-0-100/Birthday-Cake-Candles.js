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

function birthdayCakeCandles(candles) {
    const maxHeight = Math.max(...candles);
    return candles.filter(c => c === maxHeight).length;
}

function main() {
    const candlesCount = parseInt(readLine().trim(), 10);
    const candles = readLine().replace(/\s+$/g, "").split(" ").map(candlesTemp => parseInt(candlesTemp, 10));

    const result = birthdayCakeCandles(candles);
    console.log(result);
}