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

function saveThePrisoner(n, m, s) {
    const position = (s + m - 1) % n;
    return position === 0 ? n : position;
}

function main() {
    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const nms = readLine().replace(/\s+$/g, "").split(" ");
        const n = parseInt(nms[0], 10);
        const m = parseInt(nms[1], 10);
        const s = parseInt(nms[2], 10);

        const result = saveThePrisoner(n, m, s);
        console.log(result);
    }
}