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

function almostSorted(arr) {
    const n = arr.length;
    const sorted = [...arr].sort((a, b) => a - b);
    const mismatches = [];
    
    for (let i = 0; i < n; i++) {
        if (arr[i] !== sorted[i]) {
            mismatches.push(i);
        }
    }
    
    if (mismatches.length === 0) {
        console.log("yes");
        return;
    }
    
    if (mismatches.length === 2) {
        console.log("yes");
        console.log(`swap ${mismatches[0] + 1} ${mismatches[1] + 1}`);
        return;
    }
    
    const first = mismatches[0];
    const last = mismatches[mismatches.length - 1];
    const reversed = [...arr.slice(0, first), ...arr.slice(first, last + 1).reverse(), ...arr.slice(last + 1)];
    
    let isValid = true;
    for (let i = 0; i < n; i++) {
        if (reversed[i] !== sorted[i]) {
            isValid = false;
            break;
        }
    }
    
    if (isValid) {
        console.log("yes");
        console.log(`reverse ${first + 1} ${last + 1}`);
    } else {
        console.log("no");
    }
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    almostSorted(arr);
}