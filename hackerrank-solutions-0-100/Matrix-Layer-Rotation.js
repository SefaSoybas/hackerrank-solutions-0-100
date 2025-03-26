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

/*
 * Complete the 'matrixRotation' function below.
 *
 * The function accepts following parameters:
 *  1. 2D_INTEGER_ARRAY matrix
 *  2. INTEGER r
 */

function matrixRotation(matrix, r) {
    const m = matrix.length;
    const n = matrix[0].length;

 
    const layers = Math.min(m, n) / 2;

    
    const result = Array.from({ length: m }, () => Array(n));

  
    for (let layer = 0; layer < layers; layer++) {
        let elements = [];

      
        for (let i = layer; i < n - layer; i++) {
            elements.push(matrix[layer][i]);
        }

    
        for (let i = layer + 1; i < m - layer; i++) {
            elements.push(matrix[i][n - layer - 1]);
        }

   
        for (let i = n - layer - 2; i >= layer; i--) {
            elements.push(matrix[m - layer - 1][i]);
        }

    
        for (let i = m - layer - 2; i > layer; i--) {
            elements.push(matrix[i][layer]);
        }

       
        const numElements = elements.length;
        const rotationSteps = r % numElements;

        
        elements = [...elements.slice(rotationSteps), ...elements.slice(0, rotationSteps)];

        
        let idx = 0;

        for (let i = layer; i < n - layer; i++) {
            result[layer][i] = elements[idx++];
        }

      
        for (let i = layer + 1; i < m - layer; i++) {
            result[i][n - layer - 1] = elements[idx++];
        }

    
        for (let i = n - layer - 2; i >= layer; i--) {
            result[m - layer - 1][i] = elements[idx++];
        }

       
        for (let i = m - layer - 2; i > layer; i--) {
            result[i][layer] = elements[idx++];
        }
    }

   
    for (let i = 0; i < m; i++) {
        console.log(result[i].join(' '));
    }
}

function main() {
    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const m = parseInt(firstMultipleInput[0], 10);
    const n = parseInt(firstMultipleInput[1], 10);
    const r = parseInt(firstMultipleInput[2], 10);

    let matrix = Array(m);

    for (let i = 0; i < m; i++) {
        matrix[i] = readLine().replace(/\s+$/g, '').split(' ').map(matrixTemp => parseInt(matrixTemp, 10));
    }

    matrixRotation(matrix, r);
}
