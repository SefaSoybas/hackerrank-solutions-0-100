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

function hackerrankInString(s) {
    const target = 'hackerrank';
    let index = 0;
    
    for (const char of s) {
        if (char === target[index]) {
            index++;
            if (index === target.length) {
                return 'YES';
            }
        }
    }
    
    return 'NO';
}

function main() {
    const q = parseInt(readLine().trim(), 10);
    for (let i = 0; i < q; i++) {
        const s = readLine();
        const result = hackerrankInString(s);
        console.log(result);
    }
}