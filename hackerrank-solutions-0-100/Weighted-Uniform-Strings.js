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

function weightedUniformStrings(s, queries) {
    const weights = new Set();
    let currentChar = '';
    let currentLength = 0;
    
    for (const char of s) {
        if (char === currentChar) {
            currentLength++;
        } else {
            currentChar = char;
            currentLength = 1;
        }
        const weight = (char.charCodeAt(0) - 96) * currentLength;
        weights.add(weight);
    }
    
    return queries.map(q => weights.has(q) ? 'Yes' : 'No');
}

function main() {
    const s = readLine();
    const queriesCount = parseInt(readLine().trim(), 10);
    let queries = [];
    for (let i = 0; i < queriesCount; i++) {
        const queriesItem = parseInt(readLine().trim(), 10);
        queries.push(queriesItem);
    }
    const result = weightedUniformStrings(s, queries);
    console.log(result.join('\n'));
}