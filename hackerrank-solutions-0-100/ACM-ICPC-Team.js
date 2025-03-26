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

function acmTeam(topic) {
    let maxTopics = 0;
    let maxTeams = 0;
    const n = topic.length;
    
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let count = 0;
            for (let k = 0; k < topic[i].length; k++) {
                if (topic[i][k] === '1' || topic[j][k] === '1') {
                    count++;
                }
            }
            if (count > maxTopics) {
                maxTopics = count;
                maxTeams = 1;
            } else if (count === maxTopics) {
                maxTeams++;
            }
        }
    }
    
    return [maxTopics, maxTeams];
}

function main() {
    const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");
    const n = parseInt(firstMultipleInput[0], 10);
    const m = parseInt(firstMultipleInput[1], 10);

    let topic = [];
    for (let i = 0; i < n; i++) {
        const topicItem = readLine();
        topic.push(topicItem);
    }

    const result = acmTeam(topic);
    console.log(result.join("\n"));
}