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

function circularArrayRotation(a, k, queries) {
    const n = a.length;
    k = k % n; // Effective rotations
    const rotated = [...a.slice(n - k), ...a.slice(0, n - k)];
    return queries.map(q => rotated[q]);
}

function main() {
    const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");
    const n = parseInt(firstMultipleInput[0], 10);
    const k = parseInt(firstMultipleInput[1], 10);
    const q = parseInt(firstMultipleInput[2], 10);

    const a = readLine().replace(/\s+$/g, "").split(" ").map(aTemp => parseInt(aTemp, 10));
    let queries = [];

    for (let i = 0; i < q; i++) {
        const queriesItem = parseInt(readLine().trim(), 10);
        queries.push(queriesItem);
    }

    const result = circularArrayRotation(a, k, queries);
    console.log(result.join("\n"));
}