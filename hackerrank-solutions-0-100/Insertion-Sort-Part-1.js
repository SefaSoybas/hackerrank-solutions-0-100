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

function insertionSort1(n, arr) {
    const value = arr[n-1];
    let i = n-2;
    
    while (i >= 0 && arr[i] > value) {
        arr[i+1] = arr[i];
        console.log(arr.join(' '));
        i--;
    }
    
    arr[i+1] = value;
    console.log(arr.join(' '));
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    insertionSort1(n, arr);
}