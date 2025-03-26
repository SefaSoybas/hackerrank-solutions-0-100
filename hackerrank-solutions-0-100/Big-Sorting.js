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

/*
 * Complete the 'bigSorting' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY unsorted
 */

function bigSorting(unsorted) {
    // Sort the array first by the length of the strings, then by the string value itself
    unsorted.sort((a, b) => {
        // First compare by length
        if (a.length !== b.length) {
            return a.length - b.length;
        }
        // If lengths are the same, compare by the numeric value
        return a.localeCompare(b);
    });
    return unsorted;
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    let unsorted = [];

    for (let i = 0; i < n; i++) {
        unsorted.push(readLine().trim());
    }

    const result = bigSorting(unsorted);

    console.log(result.join('\n'));
}
