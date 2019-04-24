// Complete the arrayManipulation function below.
function arrayManipulation(n, queries) {
    let startValues = new Array(n + 1).fill(0);
    let endValues = new Array(n + 1).fill(0);

    queries.forEach((query) => {
        const startIndex = query[0];
        const endIndex = query[1];
        const value = query[2];

        startValues[startIndex] += value;
        endValues[endIndex] += value;
    });

    let maxValue = 0;
    let currentValue = startValues[0];

    for (let i = 1; i < n + 1; i++) {
        currentValue += startValues[i];

        if (currentValue > maxValue) {
            maxValue = currentValue;
        }

        currentValue -= endValues[i];
    }

    return maxValue;
};

// const n1 = 4;
// const queries1 = [
//     [2, 3, 603],
//     [1, 1, 286],
//     [4, 4, 882],
// ];

// // Real result: 882
// const max1 = arrayManipulation(n1, queries1);
// console.log();

// const n2 = 10;
// const queries2 = [
//     [1, 5, 3],
//     [4, 8, 7],
//     [6, 9, 1],
// ];

// // Real result: 10
// const max2 = arrayManipulation(n2, queries2);
// console.log();

const n3 = 5;
const queries3 = [
    [1, 2, 100],
    [2, 5, 100],
    [3, 4, 100],
];

// Real result: 200
const max3 = arrayManipulation(n3, queries3);
console.log();




