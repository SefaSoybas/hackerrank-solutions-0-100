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

function cavityMap(grid) {
    let n = grid.length;
    let result = grid.slice();

    for (let i = 1; i < n - 1; i++) {
        for (let j = 1; j < n - 1; j++) {
            let cell = grid[i][j];
            if (
                cell > grid[i - 1][j] &&
                cell > grid[i + 1][j] &&
                cell > grid[i][j - 1] &&
                cell > grid[i][j + 1]
            ) {
                result[i] = result[i].substring(0, j) + 'X' + result[i].substring(j + 1);
            }
        }
    }

    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const n = parseInt(readLine().trim(), 10);
    let grid = [];

    for (let i = 0; i < n; i++) {
        grid.push(readLine().trim());
    }

    const result = cavityMap(grid);
    ws.write(result.join('\n') + '\n');
    ws.end();
}
