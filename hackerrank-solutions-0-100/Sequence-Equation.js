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

function permutationEquation(p) {
    const indexMap = {};
    p.forEach((value, index) => {
        indexMap[value] = index + 1; 
    });
    
    return p.map((_, i) => indexMap[indexMap[i + 1]]);
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    const p = readLine().replace(/\s+$/g, "").split(" ").map(pTemp => parseInt(pTemp, 10));

    const result = permutationEquation(p);
    console.log(result.join("\n"));
}