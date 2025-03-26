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

function alternate(s) {
    const uniqueChars = [...new Set(s)];
    let maxLength = 0;
    
    for (let i = 0; i < uniqueChars.length; i++) {
        for (let j = i + 1; j < uniqueChars.length; j++) {
            const c1 = uniqueChars[i];
            const c2 = uniqueChars[j];
            let temp = '';
            let valid = true;
            
            for (const char of s) {
                if (char === c1 || char === c2) {
                    temp += char;
                }
            }
            
            for (let k = 0; k < temp.length - 1; k++) {
                if (temp[k] === temp[k + 1]) {
                    valid = false;
                    break;
                }
            }
            
            if (valid && temp.length > maxLength) {
                maxLength = temp.length;
            }
        }
    }
    
    return maxLength;
}

function main() {
    const l = parseInt(readLine().trim(), 10);
    const s = readLine();
    const result = alternate(s);
    console.log(result);
}