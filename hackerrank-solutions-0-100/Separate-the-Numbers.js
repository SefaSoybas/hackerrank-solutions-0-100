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

function separateNumbers(s) {
    if (s.length < 2) {
        console.log('NO');
        return;
    }

    for (let i = 1; i <= Math.floor(s.length / 2); i++) {
        const firstNumStr = s.substring(0, i);
        if (firstNumStr[0] === '0') continue;

        let num = BigInt(firstNumStr);
        let expected = num + 1n;
        let currentIndex = i;
        let isValid = true;

        while (currentIndex < s.length) {
            const expectedStr = expected.toString();
            if (!s.startsWith(expectedStr, currentIndex)) {
                isValid = false;
                break;
            }
            currentIndex += expectedStr.length;
            expected += 1n;
        }

        if (isValid) {
            console.log(`YES ${firstNumStr}`);
            return;
        }
    }

    console.log('NO');
}

function main() {
    const q = parseInt(readLine().trim(), 10);
    for (let i = 0; i < q; i++) {
        const s = readLine();
        separateNumbers(s);
    }
}