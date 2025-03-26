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

function minimumNumber(n, password) {
    const numbers = /[0-9]/;
    const lower_case = /[a-z]/;
    const upper_case = /[A-Z]/;
    const special_characters = /[!@#$%^&*()\-+]/;
    
    let missingTypes = 0;
    if (!numbers.test(password)) missingTypes++;
    if (!lower_case.test(password)) missingTypes++;
    if (!upper_case.test(password)) missingTypes++;
    if (!special_characters.test(password)) missingTypes++;
    
    return Math.max(missingTypes, 6 - n);
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    const password = readLine();
    const result = minimumNumber(n, password);
    console.log(result);
}