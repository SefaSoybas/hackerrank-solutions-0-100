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

function beautifulBinaryString(b) {
    let count = 0;
    for (let i = 0; i < b.length - 2; i++) {
        if (b[i] === '0' && b[i+1] === '1' && b[i+2] === '0') {
            count++;
            i += 2; // Skip next two characters to avoid overlapping patterns
        }
    }
    return count;
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    const b = readLine();
    const result = beautifulBinaryString(b);
    console.log(result);
}