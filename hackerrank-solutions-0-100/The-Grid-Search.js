'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function gridSearch(G, P) {
    let rowsG = G.length, colsG = G[0].length;
    let rowsP = P.length, colsP = P[0].length;

    for (let i = 0; i <= rowsG - rowsP; i++) {
        for (let j = 0; j <= colsG - colsP; j++) {
            let found = true;
            for (let x = 0; x < rowsP; x++) {
                if (G[i + x].substr(j, colsP) !== P[x]) {
                    found = false;
                    break;
                }
            }
            if (found) return "YES";
        }
    }
    
    return "NO";
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const [R, C] = readLine().trim().split(' ').map(Number);
        let G = [];
        for (let i = 0; i < R; i++) {
            G.push(readLine().trim());
        }

        const [r, c] = readLine().trim().split(' ').map(Number);
        let P = [];
        for (let i = 0; i < r; i++) {
            P.push(readLine().trim());
        }

        const result = gridSearch(G, P);
        ws.write(result + '\n');
    }

    ws.end();
}
