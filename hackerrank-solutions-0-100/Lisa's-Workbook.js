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

function workbook(n, k, arr) {
    let page = 1;
    let specialCount = 0;

    for (let i = 0; i < n; i++) {
        for (let problem = 1; problem <= arr[i]; problem++) {
            if (problem === page) {
                specialCount++;
            }
            if (problem % k === 0 || problem === arr[i]) {
                page++;
            }
        }
    }

    return specialCount;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const [n, k] = readLine().trim().split(' ').map(Number);
    const arr = readLine().trim().split(' ').map(Number);
    const result = workbook(n, k, arr);
    ws.write(result + '\n');
    ws.end();
}
