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

function camelcase(s) {
    let count = 1;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i].toUpperCase()) {
            count++;
        }
    }
    return count;
}

function main() {
    const s = readLine();
    const result = camelcase(s);
    console.log(result);
}