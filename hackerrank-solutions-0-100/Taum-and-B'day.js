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

function taumBday(b, w, bc, wc, z) {

    const costB = BigInt(Math.min(bc, wc + z));
    const costW = BigInt(Math.min(wc, bc + z));
    

    return (BigInt(b) * costB) + (BigInt(w) * costW);
}

function main() {
    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");
        const b = parseInt(firstMultipleInput[0], 10);
        const w = parseInt(firstMultipleInput[1], 10);

        const secondMultipleInput = readLine().replace(/\s+$/g, "").split(" ");
        const bc = parseInt(secondMultipleInput[0], 10);
        const wc = parseInt(secondMultipleInput[1], 10);
        const z = parseInt(secondMultipleInput[2], 10);

        const result = taumBday(b, w, bc, wc, z);
        console.log(result.toString());
    }
}