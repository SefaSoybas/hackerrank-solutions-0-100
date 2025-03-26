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

function timeInWords(h, m) {
    const numbers = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "quarter", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty one", "twenty two", "twenty three", "twenty four", "twenty five", "twenty six", "twenty seven", "twenty eight", "twenty nine"];

    if (m === 0) return `${numbers[h]} o' clock`;
    if (m === 1) return `one minute past ${numbers[h]}`;
    if (m === 15) return `quarter past ${numbers[h]}`;
    if (m === 30) return `half past ${numbers[h]}`;
    if (m === 45) return `quarter to ${numbers[h + 1]}`;
    if (m === 59) return `one minute to ${numbers[h + 1]}`;
    if (m < 30) return `${numbers[m]} minutes past ${numbers[h]}`;
    return `${numbers[60 - m]} minutes to ${numbers[h + 1]}`;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const h = parseInt(readLine().trim(), 10);
    const m = parseInt(readLine().trim(), 10);
    const result = timeInWords(h, m);
    ws.write(result + '\n');
    ws.end();
}
