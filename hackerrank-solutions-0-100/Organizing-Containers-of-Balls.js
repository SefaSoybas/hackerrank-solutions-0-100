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

function organizingContainers(container) {
    const n = container.length;
    const containerSums = new Array(n).fill(0);
    const ballTypeSums = new Array(n).fill(0);
    
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            containerSums[i] += container[i][j];
            ballTypeSums[j] += container[i][j];
        }
    }
    
    
    containerSums.sort((a, b) => a - b);
    ballTypeSums.sort((a, b) => a - b);
    
    
    for (let i = 0; i < n; i++) {
        if (containerSums[i] !== ballTypeSums[i]) {
            return "Impossible";
        }
    }
    return "Possible";
}

function main() {
    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const n = parseInt(readLine().trim(), 10);
        let container = Array(n);

        for (let i = 0; i < n; i++) {
            container[i] = readLine().replace(/\s+$/g, "").split(" ").map(containerTemp => parseInt(containerTemp, 10));
        }

        const result = organizingContainers(container);
        console.log(result);
    }
}