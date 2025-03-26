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

function countingSort(arr) {
    const count = new Array(100).fill(0);
    for (const num of arr) {
        count[num]++;
    }
    
    const sorted = [];
    for (let i = 0; i < count.length; i++) {
        while (count[i] > 0) {
            sorted.push(i);
            count[i]--;
        }
    }
    
    return sorted;
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    const result = countingSort(arr);
    console.log(result.join(' '));
}