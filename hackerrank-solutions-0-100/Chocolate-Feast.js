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

function chocolateFeast(n, c, m) {
    let chocolates = Math.floor(n / c);
    let wrappers = chocolates;

    while (wrappers >= m) {
        let newChocolates = Math.floor(wrappers / m);
        chocolates += newChocolates;
        wrappers = wrappers % m + newChocolates;
    }

    return chocolates;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const [n, c, m] = readLine().trim().split(' ').map(Number);
        const result = chocolateFeast(n, c, m);
        ws.write(result + '\n');
    }

    ws.end();
}
