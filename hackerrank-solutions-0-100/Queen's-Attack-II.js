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

function queensAttack(n, k, r_q, c_q, obstacles) {
    
    const directions = {
        'up': n - r_q,
        'down': r_q - 1,
        'left': c_q - 1,
        'right': n - c_q,
        'upLeft': Math.min(n - r_q, c_q - 1),
        'upRight': Math.min(n - r_q, n - c_q),
        'downLeft': Math.min(r_q - 1, c_q - 1),
        'downRight': Math.min(r_q - 1, n - c_q)
    };

    
    for (const [r, c] of obstacles) {
      
        if (r === r_q) {
            if (c < c_q) {
                directions.left = Math.min(directions.left, c_q - c - 1);
            } else {
                directions.right = Math.min(directions.right, c - c_q - 1);
            }
        }
       
        else if (c === c_q) {
            if (r < r_q) {
                directions.down = Math.min(directions.down, r_q - r - 1);
            } else {
                directions.up = Math.min(directions.up, r - r_q - 1);
            }
        }
        
        else if (Math.abs(r - r_q) === Math.abs(c - c_q)) {
            const distance = Math.abs(r - r_q) - 1;
            if (r > r_q && c < c_q) { // Up-left
                directions.upLeft = Math.min(directions.upLeft, distance);
            } else if (r > r_q && c > c_q) { // Up-right
                directions.upRight = Math.min(directions.upRight, distance);
            } else if (r < r_q && c < c_q) { // Down-left
                directions.downLeft = Math.min(directions.downLeft, distance);
            } else if (r < r_q && c > c_q) { // Down-right
                directions.downRight = Math.min(directions.downRight, distance);
            }
        }
    }

    return Object.values(directions).reduce((sum, val) => sum + val, 0);
}

function main() {
    const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");
    const n = parseInt(firstMultipleInput[0], 10);
    const k = parseInt(firstMultipleInput[1], 10);

    const secondMultipleInput = readLine().replace(/\s+$/g, "").split(" ");
    const r_q = parseInt(secondMultipleInput[0], 10);
    const c_q = parseInt(secondMultipleInput[1], 10);

    let obstacles = [];
    for (let i = 0; i < k; i++) {
        obstacles.push(readLine().replace(/\s+$/g, "").split(" ").map(obstaclesTemp => parseInt(obstaclesTemp, 10)));
    }

    const result = queensAttack(n, k, r_q, c_q, obstacles);
    console.log(result);
}