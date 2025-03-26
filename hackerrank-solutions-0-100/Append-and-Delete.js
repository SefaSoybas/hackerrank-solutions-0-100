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

function appendAndDelete(s, t, k) {
    let commonLength = 0;
    const minLength = Math.min(s.length, t.length);
    
    while (commonLength < minLength && s[commonLength] === t[commonLength]) {
        commonLength++;
    }
    
    const minOperations = (s.length - commonLength) + (t.length - commonLength);
    
    if (k >= s.length + t.length) {
        return "Yes";
    } else if (k >= minOperations && (k - minOperations) % 2 === 0) {
        return "Yes";
    } else {
        return "No";
    }
}

function main() {
    const s = readLine();
    const t = readLine();
    const k = parseInt(readLine().trim(), 10);

    const result = appendAndDelete(s, t, k);
    console.log(result);
}