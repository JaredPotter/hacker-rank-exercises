// Complete the hourglassSum function below.
function hourglassSum(arr) {
    const n = arr.length;
    const flattenArr = arr.reduce((acc, subArr) => acc.concat(subArr), []);
    const innerWidth = n - 2; // Without edges.
    let centerIndicies = [];

    // Dynamically generating inner indices.
    for (let i = 1; i <= innerWidth; i++) {
        for (let j = 0; j < innerWidth; j++) {
            const index = (n * i) + 1 + j;
            centerIndicies.push(index);
        }
    }

    let currentMax = null;

    centerIndicies.forEach(index => {
        const value =
            flattenArr[index - (n + 1)] +
            flattenArr[index - n] +
            flattenArr[index - (n - 1)] +
            flattenArr[index] +
            flattenArr[index + (n - 1)] +
            flattenArr[index + n] +
            flattenArr[index + (n + 1)];

        if (value > currentMax || currentMax === null) {
            currentMax = value
        }
    });

    return currentMax;
}