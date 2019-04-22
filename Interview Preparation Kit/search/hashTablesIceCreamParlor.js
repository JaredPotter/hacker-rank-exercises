function binarySearch(array, target, start, end) {
    const middle = Math.floor((start + end) / 2);

    if (target == array[middle]) {
        return array[middle];
    }

    if (end - 1 === start) {
        return Math.abs(array[start] - target) > Math.abs(array[end] - target) ? array[end] : array[start]; 
    }

    if (target > array[middle]) {
        return binarySearch(array, target, middle, end);
    }

    if (target < array[middle]) {
        return binarySearch(array, target, start, middle);
    }
}

function whatFlavors(cost, money) {
    let costMap = {};

    cost.forEach((cost, index) => {
        if (costMap[cost]) {
            costMap[cost].push(index + 1);
        }
        else {
            costMap[cost] = [index + 1];
        }
    });

    const sortedCost = cost.sort((a, b) => { return a - b; });

    let offset = 0;
    let results = [];

    while (results.length !== 2) {
        const target = money - 1 - offset;
        let targetCost1 = binarySearch(sortedCost, target, 0, sortedCost.length - 1);

        results = [];

        if (costMap[targetCost1]) {
            results.push(costMap[targetCost1][0]);

            const targetCost2 = money - targetCost1;

            if (costMap[targetCost2]) {
                if (targetCost1 === targetCost2) {
                    if (costMap[targetCost2].length > 1) {
                        results.push(costMap[targetCost2][1]);
                        break;
                    }
                    else {
                        offset++;
                        continue;
                    }
                }
                else {
                    results.push(costMap[targetCost2][0]);
                    break;
                }
            }
            else {
                offset++;
                continue;
            }
        }
        else {
            offset++;
            continue;
        }        
    }

    results = results.sort((a, b) => { return a - b; });
    results = results.join(' ');
    console.log(results);
}

const money1 = 4;
const cost1 = [1, 4, 5, 3, 2];
whatFlavors(cost1, money1);

const money2 = 4;
const cost2 = [2, 2, 4, 3];
whatFlavors(cost2, money2);
