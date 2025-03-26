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

function sockMerchant(n, ar) {
    const sockCount = {};
    let pairs = 0;
    
    for (const sock of ar) {
        sockCount[sock] = (sockCount[sock] || 0) + 1;
    }
    
    for (const count of Object.values(sockCount)) {
        pairs += Math.floor(count / 2);
    }
    
    return pairs;
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    const ar = readLine().replace(/\s+$/g, "").split(" ").map(arTemp => parseInt(arTemp, 10));

    const result = sockMerchant(n, ar);
    console.log(result);
}