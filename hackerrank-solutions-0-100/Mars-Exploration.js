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

function marsExploration(s) {
    let count = 0;
    const expected = 'SOS';
    
    for (let i = 0; i < s.length; i++) {
        const expectedChar = expected[i % 3];
        if (s[i] !== expectedChar) {
            count++;
        }
    }
    
    return count;
}

function main() {
    const s = readLine();
    const result = marsExploration(s);
    console.log(result);
}