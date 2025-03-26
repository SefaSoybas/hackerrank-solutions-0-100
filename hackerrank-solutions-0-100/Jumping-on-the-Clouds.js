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

function jumpingOnClouds(c) {
    let jumps = 0;
    let i = 0;
    const n = c.length;
    
    while (i < n - 1) {
        if (i + 2 < n && c[i + 2] === 0) {
            i += 2;
        } else {
            i += 1;
        }
        jumps++;
    }
    
    return jumps;
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    const c = readLine().replace(/\s+$/g, "").split(" ").map(cTemp => parseInt(cTemp, 10));

    const result = jumpingOnClouds(c);
    console.log(result);
}