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

function runningTime(arr) {
    let shifts = 0;
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            shifts++;
            j--;
        }
        arr[j + 1] = key;
    }
    return shifts;
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    const result = runningTime(arr);
    console.log(result);
}