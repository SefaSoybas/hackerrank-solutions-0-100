'use strict';

const fs = require('fs');

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

function serviceLane(n, cases, width) {
    let results = [];

    for (let i = 0; i < cases.length; i++) {
        let [start, end] = cases[i];
        results.push(Math.min(...width.slice(start, end + 1)));
    }

    return results;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const [n, t] = readLine().trim().split(' ').map(Number);
    const width = readLine().trim().split(' ').map(Number);
    let cases = [];

    for (let i = 0; i < t; i++) {
        cases.push(readLine().trim().split(' ').map(Number));
    }

    const result = serviceLane(n, cases, width);
    ws.write(result.join('\n') + '\n');
    ws.end();
}
