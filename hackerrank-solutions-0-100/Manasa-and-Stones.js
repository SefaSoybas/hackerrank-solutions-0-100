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

function stones(n, a, b) {
    let results = new Set();

    for (let i = 0; i < n; i++) {
        results.add(i * a + (n - 1 - i) * b);
    }

    return Array.from(results).sort((x, y) => x - y);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const T = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < T; tItr++) {
        const n = parseInt(readLine().trim(), 10);
        const a = parseInt(readLine().trim(), 10);
        const b = parseInt(readLine().trim(), 10);
        const result = stones(n, a, b);
        ws.write(result.join(' ') + '\n');
    }

    ws.end();
}
