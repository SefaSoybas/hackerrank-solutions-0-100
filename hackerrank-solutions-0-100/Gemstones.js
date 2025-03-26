'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function gemstones(arr) {
    if (arr.length === 0) return 0;
    
    const mineralCounts = {};
    const firstRock = new Set(arr[0]);
    
    for (const mineral of firstRock) {
        mineralCounts[mineral] = 1;
    }
    
    for (let i = 1; i < arr.length; i++) {
        const currentRock = new Set(arr[i]);
        for (const mineral in mineralCounts) {
            if (currentRock.has(mineral)) {
                mineralCounts[mineral]++;
            }
        }
    }
    
    let gemstoneCount = 0;
    for (const mineral in mineralCounts) {
        if (mineralCounts[mineral] === arr.length) {
            gemstoneCount++;
        }
    }
    
    return gemstoneCount;
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    let arr = [];
    for (let i = 0; i < n; i++) {
        const arrItem = readLine();
        arr.push(arrItem);
    }
    const result = gemstones(arr);
    console.log(result);
}