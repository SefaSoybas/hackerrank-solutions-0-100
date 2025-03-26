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

function closestNumbers(arr) {
    arr.sort((a, b) => a - b);
    let minDiff = Infinity;
    const result = [];
    
    for (let i = 1; i < arr.length; i++) {
        const diff = arr[i] - arr[i-1];
        if (diff < minDiff) {
            minDiff = diff;
            result.length = 0;
            result.push(arr[i-1], arr[i]);
        } else if (diff === minDiff) {
            result.push(arr[i-1], arr[i]);
        }
    }
    
    return result;
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    const result = closestNumbers(arr);
    console.log(result.join(' '));
}