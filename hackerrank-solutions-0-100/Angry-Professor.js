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

function angryProfessor(k, a) {
    let onTime = 0;
    for (const time of a) {
        if (time <= 0) onTime++;
    }
    return onTime < k ? "YES" : "NO";
}

function main() {
    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const nk = readLine().split(" ");
        const n = parseInt(nk[0], 10);
        const k = parseInt(nk[1], 10);
        const a = readLine().split(" ").map(aTemp => parseInt(aTemp, 10));

        const result = angryProfessor(k, a);
        console.log(result);
    }
}