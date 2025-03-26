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

function countingValleys(steps, path) {
    let altitude = 0;
    let valleys = 0;
    
    for (const step of path) {
        if (step === 'U') {
            altitude++;
            if (altitude === 0) valleys++;
        } else {
            altitude--;
        }
    }
    
    return valleys;
}

function main() {
    const steps = parseInt(readLine().trim(), 10);
    const path = readLine();

    const result = countingValleys(steps, path);
    console.log(result);
}