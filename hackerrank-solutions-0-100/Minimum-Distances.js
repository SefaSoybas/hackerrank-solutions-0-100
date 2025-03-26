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

function minimumDistances(a) {
    const lastIndex = {};
    let minDistance = Infinity;
    
    for (let i = 0; i < a.length; i++) {
        if (lastIndex[a[i]] !== undefined) {
            minDistance = Math.min(minDistance, i - lastIndex[a[i]]);
        }
        lastIndex[a[i]] = i;
    }
    
    return minDistance === Infinity ? -1 : minDistance;
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    const a = readLine().replace(/\s+$/g, "").split(" ").map(aTemp => parseInt(aTemp, 10));

    const result = minimumDistances(a);
    console.log(result);
}