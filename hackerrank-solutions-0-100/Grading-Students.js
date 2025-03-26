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

function gradingStudents(grades) {
    return grades.map(grade => {
        if (grade < 38) return grade;
        const nextMultiple = Math.ceil(grade / 5) * 5;
        return (nextMultiple - grade < 3) ? nextMultiple : grade;
    });
}

function main() {
    const gradesCount = parseInt(readLine().trim(), 10);
    let grades = [];

    for (let i = 0; i < gradesCount; i++) {
        const gradesItem = parseInt(readLine().trim(), 10);
        grades.push(gradesItem);
    }

    const result = gradingStudents(grades);
    console.log(result.join("\n"));
}