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

function kaprekarNumbers(p, q) {
    let result = [];
    for (let i = p; i <= q; i++) {
        const square = i * i;
        const str = square.toString();
        const len = str.length;
        const left = len > 1 ? parseInt(str.substring(0, len / 2)) : 0;
        const right = parseInt(str.substring(len / 2));
        
        if (left + right === i) {
            result.push(i);
        }
    }
    
    if (result.length === 0) {
        console.log("INVALID RANGE");
    } else {
        console.log(result.join(" "));
    }
}

function main() {
    const p = parseInt(readLine().trim(), 10);
    const q = parseInt(readLine().trim(), 10);

    kaprekarNumbers(p, q);
}