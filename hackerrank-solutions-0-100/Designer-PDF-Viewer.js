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

function designerPdfViewer(h, word) {
    const charCodeA = 'a'.charCodeAt(0);
    let maxHeight = 0;
    
    for (const char of word) {
        const height = h[char.charCodeAt(0) - charCodeA];
        if (height > maxHeight) {
            maxHeight = height;
        }
    }
    
    return maxHeight * word.length;
}

function main() {
    const h = readLine().replace(/\s+$/g, "").split(" ").map(hTemp => parseInt(hTemp, 10));
    const word = readLine();

    const result = designerPdfViewer(h, word);
    console.log(result);
}