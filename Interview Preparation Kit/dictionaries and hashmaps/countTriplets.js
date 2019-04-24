function countTriplets(arr, r) {
    let map2 = {};
    let map3 = {};
    let count = 0;

    arr.forEach(value => {
        if (map3.hasOwnProperty(value)) {
            count += map3[value];
        }

        if (map2.hasOwnProperty(value)) {
            const v1 = (map3[value * r] += map2[value]); // Increment and assignment.
            const v2 = map2[value];

            map3[value * r] = v1 || v2;
        }

        const a1 = (map2[value * r] += 1);
        const a2 = 1;
           
        map2[value * r] = a1 || a2;
    });

    return count;
}

const arr1 = [1, 3, 9, 9, 27, 81];
const r1 = 3;
const result1 = countTriplets(arr1, r1);
console.log();

const arr2 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const r2 = 1;
const result2 = countTriplets(arr2, r2);
console.log();
