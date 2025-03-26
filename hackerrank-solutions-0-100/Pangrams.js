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

function pangrams(s) {
    const letters = new Set();
    const lowerStr = s.toLowerCase();
    
    for (const char of lowerStr) {
        if (/[a-z]/.test(char)) {
            letters.add(char);
        }
    }
    
    return letters.size === 26 ? 'pangram' : 'not pangram';
}

function main() {
    const s = readLine();
    const result = pangrams(s);
    console.log(result);
}