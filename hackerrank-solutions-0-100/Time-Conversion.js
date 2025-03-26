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

function timeConversion(s) {
    const period = s.slice(-2);
    let hours = parseInt(s.slice(0, 2), 10);
    const minutesSeconds = s.slice(2, 8);

    if (period === "PM" && hours !== 12) {
        hours += 12;
    } else if (period === "AM" && hours === 12) {
        hours = 0;
    }

    return (hours.toString().padStart(2, "0") + minutesSeconds);
}

function main() {
    const s = readLine();
    const result = timeConversion(s);
    console.log(result);
}