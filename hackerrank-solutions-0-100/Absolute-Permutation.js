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

function absolutePermutation(n, k) {
    if (k === 0) return Array.from({ length: n }, (_, i) => i + 1).join(' ');

    if (n % (2 * k) !== 0) return "-1";

    let result = [];
    for (let i = 1; i <= n; i++) {
        if (Math.floor((i - 1) / k) % 2 === 0) {
            result.push(i + k);
        } else {
            result.push(i - k);
        }
    }

    return result.join(' ');
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const [n, k] = readLine().trim().split(' ').map(Number);
        const result = absolutePermutation(n, k);
        ws.write(result + '\n');
    }

    ws.end();
}
