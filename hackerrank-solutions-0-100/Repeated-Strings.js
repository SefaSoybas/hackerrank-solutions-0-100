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

function repeatedString(s, n) {
    const countA = (str) => str.split('').filter(c => c === 'a').length;
    const fullRepeats = Math.floor(n / s.length);
    const remainder = n % s.length;
    return fullRepeats * countA(s) + countA(s.substring(0, remainder));
}

function main() {
    const s = readLine();
    const n = parseInt(readLine().trim(), 10);

    const result = repeatedString(s, n);
    console.log(result);
}