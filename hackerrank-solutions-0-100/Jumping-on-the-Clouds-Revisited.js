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

function jumpingOnClouds(c, k) {
    let energy = 100;
    let n = c.length;
    let pos = 0;
    
    do {
        pos = (pos + k) % n;
        energy -= c[pos] === 1 ? 3 : 1;
    } while (pos !== 0);
    
    return energy;
}

function main() {
    const nk = readLine().split(' ');
    const n = parseInt(nk[0], 10);
    const k = parseInt(nk[1], 10);
    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    const result = jumpingOnClouds(c, k);
    console.log(result);
}