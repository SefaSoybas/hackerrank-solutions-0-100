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

function strangeCounter(t) {
    let cycleStart = 1, cycleValue = 3;

    while (t >= cycleStart + cycleValue) {
        cycleStart += cycleValue;
        cycleValue *= 2;
    }

    return cycleValue - (t - cycleStart);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const t = parseInt(readLine().trim(), 10);
    const result = strangeCounter(t);
    ws.write(result + '\n');
    ws.end();
}
