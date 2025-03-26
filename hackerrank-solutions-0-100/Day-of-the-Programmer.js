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

function dayOfProgrammer(year) {
    if (year === 1918) return "26.09.1918";
    const isLeap = year < 1918 ? 
        year % 4 === 0 : 
        year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
    return isLeap ? `12.09.${year}` : `13.09.${year}`;
}

function main() {
    const year = parseInt(readLine().trim(), 10);
    const result = dayOfProgrammer(year);
    console.log(result);
}