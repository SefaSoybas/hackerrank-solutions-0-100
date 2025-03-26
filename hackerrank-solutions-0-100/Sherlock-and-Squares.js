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

function squares(a, b) {
    const lower = Math.ceil(Math.sqrt(a));
    const upper = Math.floor(Math.sqrt(b));
    return upper - lower + 1;
}

function main() {
    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const ab = readLine().replace(/\s+$/g, "").split(" ");
        const a = parseInt(ab[0], 10);
        const b = parseInt(ab[1], 10);

        const result = squares(a, b);
        console.log(result);
    }
}