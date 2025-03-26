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

function kangaroo(x1, v1, x2, v2) {
    if (v1 === v2) {
        return x1 === x2 ? "YES" : "NO";
    }
    const t = (x2 - x1) / (v1 - v2);
    return t > 0 && Number.isInteger(t) ? "YES" : "NO";
}

function main() {
    const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");
    const x1 = parseInt(firstMultipleInput[0], 10);
    const v1 = parseInt(firstMultipleInput[1], 10);
    const x2 = parseInt(firstMultipleInput[2], 10);
    const v2 = parseInt(firstMultipleInput[3], 10);

    const result = kangaroo(x1, v1, x2, v2);
    console.log(result);
}