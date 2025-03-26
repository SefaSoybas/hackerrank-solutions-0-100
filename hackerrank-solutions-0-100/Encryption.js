"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on("end", function () {
    inputString = inputString.split("\n");
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function encryption(s) {
    s = s.replace(/\s/g, '');
    const L = s.length;
    const sqrtL = Math.sqrt(L);
    let rows = Math.floor(sqrtL);
    let cols = Math.ceil(sqrtL);
    
    if (rows * cols < L) {
        rows++;
    }
    
    let result = [];
    for (let i = 0; i < cols; i++) {
        let word = '';
        for (let j = 0; j < rows; j++) {
            const index = j * cols + i;
            if (index < L) {
                word += s[index];
            }
        }
        result.push(word);
    }
    
    return result.join(' ');
}

function main() {
    const s = readLine();
    const result = encryption(s);
    console.log(result);
}