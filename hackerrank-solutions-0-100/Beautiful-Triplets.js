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

function beautifulTriplets(d, arr) {
    let count = 0;
    const set = new Set(arr);
    
    for (const num of arr) {
        if (set.has(num + d) && set.has(num + 2 * d)) {
            count++;
        }
    }
    
    return count;
}

function main() {
    const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");
    const n = parseInt(firstMultipleInput[0], 10);
    const d = parseInt(firstMultipleInput[1], 10);

    const arr = readLine().replace(/\s+$/g, "").split(" ").map(arrTemp => parseInt(arrTemp, 10));

    const result = beautifulTriplets(d, arr);
    console.log(result);
}