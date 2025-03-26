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

function migratoryBirds(arr) {
    const frequency = {};
    for (const bird of arr) {
        frequency[bird] = (frequency[bird] || 0) + 1;
    }
    
    let maxCount = 0;
    let mostFrequentBird = Infinity;
    
    for (const bird in frequency) {
        if (frequency[bird] > maxCount || 
            (frequency[bird] === maxCount && bird < mostFrequentBird)) {
            maxCount = frequency[bird];
            mostFrequentBird = bird;
        }
    }
    
    return mostFrequentBird;
}

function main() {
    const arrCount = parseInt(readLine().trim(), 10);
    const arr = readLine().replace(/\s+$/g, "").split(" ").map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);
    console.log(result);
}