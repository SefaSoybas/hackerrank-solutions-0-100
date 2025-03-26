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

function biggerIsGreater(w) {
    const arr = w.split('');
    let pivot = -1;
    
    for (let i = arr.length - 1; i > 0; i--) {
        if (arr[i] > arr[i - 1]) {
            pivot = i - 1;
            break;
        }
    }
    
    if (pivot === -1) return "no answer";
    
    let swap = -1;
    for (let i = arr.length - 1; i > pivot; i--) {
        if (arr[i] > arr[pivot]) {
            swap = i;
            break;
        }
    }
    
    [arr[pivot], arr[swap]] = [arr[swap], arr[pivot]];
    
    const suffix = arr.slice(pivot + 1).reverse();
    const result = arr.slice(0, pivot + 1).concat(suffix).join('');
    
    return result;
}

function main() {
    const T = parseInt(readLine().trim(), 10);

    for (let TItr = 0; TItr < T; TItr++) {
        const w = readLine();
        const result = biggerIsGreater(w);
        console.log(result);
    }
}