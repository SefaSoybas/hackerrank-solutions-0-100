'use strict';

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

function countSort(arr) {
    const n = arr.length;
    const count = Array(100).fill().map(() => []);
    
   
    for (let i = 0; i < n; i++) {
        const [x, s] = arr[i];
        const str = i < n/2 ? '-' : s;
        count[x].push(str);
    }
    
   
    let result = [];
    for (let i = 0; i < 100; i++) {
        if (count[i].length > 0) {
            result.push(count[i].join(' '));
        }
    }
    
    console.log(result.join(' '));
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    let arr = [];
    for (let i = 0; i < n; i++) {
        const [x, s] = readLine().replace(/\s+$/g, '').split(' ');
        arr.push([parseInt(x, 10), s]);
    }
    countSort(arr);
}