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

function caesarCipher(s, k) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    
    for (let char of s) {
        if (alphabet.includes(char)) {
            const index = (alphabet.indexOf(char) + k) % 26;
            result += alphabet[index];
        } else if (upperAlphabet.includes(char)) {
            const index = (upperAlphabet.indexOf(char) + k) % 26;
            result += upperAlphabet[index];
        } else {
            result += char;
        }
    }
    
    return result;
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    const s = readLine();
    const k = parseInt(readLine().trim(), 10);
    const result = caesarCipher(s, k);
    console.log(result);
}