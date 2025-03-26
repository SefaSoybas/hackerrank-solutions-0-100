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

function quickSort(arr) {
    const pivot = arr[0];
    const left = [];
    const equal = [];
    const right = [];
    
    for (const num of arr) {
        if (num < pivot) {
            left.push(num);
        } else if (num === pivot) {
            equal.push(num);
        } else {
            right.push(num);
        }
    }
    
    return [...left, ...equal, ...right];
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    const result = quickSort(arr);
    console.log(result.join(' '));
}