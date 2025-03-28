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

function findDigits(n) {
    const digits = n.toString().split('');
    let count = 0;
    
    for (const d of digits) {
        const num = parseInt(d);
        if (num !== 0 && n % num === 0) {
            count++;
        }
    }
    
    return count;
}

function main() {
    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        const result = findDigits(n);
        console.log(result);
    }
}