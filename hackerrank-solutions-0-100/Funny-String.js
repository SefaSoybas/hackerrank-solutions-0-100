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

function funnyString(s) {
    const n = s.length;
    for (let i = 1; i < n; i++) {
        const originalDiff = Math.abs(s.charCodeAt(i) - s.charCodeAt(i-1));
        const reverseDiff = Math.abs(s.charCodeAt(n-i) - s.charCodeAt(n-i-1));
        if (originalDiff !== reverseDiff) {
            return 'Not Funny';
        }
    }
    return 'Funny';
}

function main() {
    const q = parseInt(readLine().trim(), 10);
    for (let i = 0; i < q; i++) {
        const s = readLine();
        const result = funnyString(s);
        console.log(result);
    }
}