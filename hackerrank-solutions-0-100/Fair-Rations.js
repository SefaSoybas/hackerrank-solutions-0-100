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

function fairRations(B) {
    let count = 0;

    for (let i = 0; i < B.length - 1; i++) {
        if (B[i] % 2 !== 0) {
            B[i]++;
            B[i + 1]++;
            count += 2;
        }
    }

    return B.every(x => x % 2 === 0) ? count.toString() : "NO";
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const n = parseInt(readLine().trim(), 10);
    const B = readLine().trim().split(' ').map(Number);
    const result = fairRations(B);
    ws.write(result + '\n');
    ws.end();
}
