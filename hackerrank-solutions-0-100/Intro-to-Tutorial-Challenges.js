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

function introTutorial(V, arr) {
    return arr.indexOf(V);
}

function main() {
    const V = parseInt(readLine().trim(), 10);
    const n = parseInt(readLine().trim(), 10);
    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    const result = introTutorial(V, arr);
    console.log(result);
}