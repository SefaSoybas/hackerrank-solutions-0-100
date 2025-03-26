'use strict';

const fs = require('fs');

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

function flatlandSpaceStations(n, c) {
    c.sort((a, b) => a - b);
    let maxDistance = c[0];

    for (let i = 1; i < c.length; i++) {
        let distance = Math.floor((c[i] - c[i - 1]) / 2);
        maxDistance = Math.max(maxDistance, distance);
    }

    maxDistance = Math.max(maxDistance, n - 1 - c[c.length - 1]);

    return maxDistance;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const [n, m] = readLine().trim().split(' ').map(Number);
    const c = readLine().trim().split(' ').map(Number);
    const result = flatlandSpaceStations(n, c);
    ws.write(result + '\n');
    ws.end();
}
