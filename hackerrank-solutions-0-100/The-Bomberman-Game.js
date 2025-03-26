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

function bomberMan(n, grid) {
    if (n === 1) return grid;
    
    const rows = grid.length;
    const cols = grid[0].length;
    

    if (n % 2 === 0) {
        return Array(rows).fill('O'.repeat(cols));
    }
  
    function detonate(currentGrid) {
        const newGrid = [];
        const bombLocations = [];
        
      
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (currentGrid[i][j] === 'O') {
                    bombLocations.push([i, j]);
                }
            }
        }
        

        for (let i = 0; i < rows; i++) {
            newGrid.push('O'.repeat(cols).split(''));
        }
        
      
        for (const [i, j] of bombLocations) {
            newGrid[i][j] = '.';
            if (i > 0) newGrid[i-1][j] = '.';
            if (i < rows - 1) newGrid[i+1][j] = '.';
            if (j > 0) newGrid[i][j-1] = '.';
            if (j < cols - 1) newGrid[i][j+1] = '.';
        }
        
        return newGrid.map(row => row.join(''));
    }
    
   
    const state3 = detonate(grid);
    const state5 = detonate(state3);
    
    if (n % 4 === 3) {
        return state3;
    } else {
        return state5;
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const r = parseInt(firstMultipleInput[0], 10);

    const c = parseInt(firstMultipleInput[1], 10);

    const n = parseInt(firstMultipleInput[2], 10);

    let grid = [];

    for (let i = 0; i < r; i++) {
        const gridItem = readLine();
        grid.push(gridItem);
    }

    const result = bomberMan(n, grid);

    ws.write(result.join('\n') + '\n');

    ws.end();
}