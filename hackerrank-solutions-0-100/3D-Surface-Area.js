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

function surfaceArea(A) {
    let H = A.length;
    let W = A[0].length;
    let area = 2 * H * W;

    for (let i = 0; i < H; i++) {
        for (let j = 0; j < W; j++) {
            let height = A[i][j];

            if (i === 0) area += height;
            else area += Math.max(0, height - A[i - 1][j]);

            if (i === H - 1) area += height;
            else area += Math.max(0, height - A[i + 1][j]);

            if (j === 0) area += height;
            else area += Math.max(0, height - A[i][j - 1]);

            if (j === W - 1) area += height;
            else area += Math.max(0, height - A[i][j + 1]);
        }
    }

    return area;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const firstMultipleInput = readLine().trim().split(' ').map(Number);
    const H = firstMultipleInput[0];
    const W = firstMultipleInput[1];

    let A = [];
    for (let i = 0; i < H; i++) {
        A.push(readLine().trim().split(' ').map(Number));
    }

    const result = surfaceArea(A);
    ws.write(result + '\n');
    ws.end();
}
