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

function alternatingCharacters(s) {
    let deletions = 0;
    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i-1]) {
            deletions++;
        }
    }
    return deletions;
}

function main() {
    const q = parseInt(readLine().trim(), 10);
    for (let i = 0; i < q; i++) {
        const s = readLine();
        const result = alternatingCharacters(s);
        console.log(result);
    }
}