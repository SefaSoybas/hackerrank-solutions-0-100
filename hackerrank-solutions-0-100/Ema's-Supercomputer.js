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

function twoPluses(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const pluses = [];

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 'G') {
                let k = 0;
                while (
                    i - k >= 0 && grid[i - k][j] === 'G' &&
                    i + k < rows && grid[i + k][j] === 'G' &&
                    j - k >= 0 && grid[i][j - k] === 'G' &&
                    j + k < cols && grid[i][j + k] === 'G'
                ) {
                    pluses.push({
                        center: [i, j],
                        size: k,
                        area: 1 + 4 * k
                    });
                    k++;
                }
            }
        }
    }

    let maxProduct = 0;
    for (let i = 0; i < pluses.length; i++) {
        for (let j = i + 1; j < pluses.length; j++) {
            if (!overlap(pluses[i], pluses[j])) {
                maxProduct = Math.max(maxProduct, pluses[i].area * pluses[j].area);
            }
        }
    }

    return maxProduct;
}

function overlap(a, b) {
    const [ai, aj] = a.center;
    const [bi, bj] = b.center;
    const aSize = a.size;
    const bSize = b.size;

    const aCells = new Set([`${ai},${aj}`]);
    for (let k = 1; k <= aSize; k++) {
        aCells.add(`${ai - k},${aj}`);
        aCells.add(`${ai + k},${aj}`);
        aCells.add(`${ai},${aj - k}`);
        aCells.add(`${ai},${aj + k}`);
    }

    const bCells = new Set([`${bi},${bj}`]);
    for (let k = 1; k <= bSize; k++) {
        bCells.add(`${bi - k},${bj}`);
        bCells.add(`${bi + k},${bj}`);
        bCells.add(`${bi},${bj - k}`);
        bCells.add(`${bi},${bj + k}`);
    }

    for (const cell of aCells) {
        if (bCells.has(cell)) {
            return true;
        }
    }
    return false;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    let grid = [];

    for (let i = 0; i < n; i++) {
        const gridItem = readLine();
        grid.push(gridItem);
    }

    const result = twoPluses(grid);

    ws.write(result + '\n');

    ws.end();
}