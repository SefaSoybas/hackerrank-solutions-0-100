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

function getTotalX(a, b) {
    const gcd = (x, y) => y === 0 ? x : gcd(y, x % y);
    const lcm = (x, y) => (x * y) / gcd(x, y);
    
    const a_lcm = a.reduce(lcm);
    const b_gcd = b.reduce(gcd);
    
    let count = 0;
    for (let i = a_lcm; i <= b_gcd; i += a_lcm) {
        if (b_gcd % i === 0) count++;
    }
    return count;
}

function main() {
    const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");
    const n = parseInt(firstMultipleInput[0], 10);
    const m = parseInt(firstMultipleInput[1], 10);

    const a = readLine().replace(/\s+$/g, "").split(" ").map(aTemp => parseInt(aTemp, 10));
    const b = readLine().replace(/\s+$/g, "").split(" ").map(bTemp => parseInt(bTemp, 10));

    const result = getTotalX(a, b);
    console.log(result);
}