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

function cutTheSticks(arr) {
    const result = [];
    while (arr.length > 0) {
        result.push(arr.length);
        const min = Math.min(...arr);
        arr = arr.map(x => x - min).filter(x => x > 0);
    }
    return result;
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    const arr = readLine().replace(/\s+$/g, "").split(" ").map(arrTemp => parseInt(arrTemp, 10));

    const result = cutTheSticks(arr);
    console.log(result.join("\n"));
}