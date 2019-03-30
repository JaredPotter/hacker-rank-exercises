// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
    let minimumSwaps = 0;
    const arrLength = arr.length;
    let correctedConut = 0;
    let index = 0;

    while (correctedConut !== arrLength) {
        let currentValue = arr[index];
        let normalizedIndex = index + 1;

        if (currentValue !== normalizedIndex) {
            // Swap.
            let tempTempValue = arr[currentValue - 1];
            arr[currentValue - 1] = currentValue;
            arr[index] = tempTempValue;
            minimumSwaps++;
        }
        else {
            index++;
            correctedConut++;
        }
    }

    return minimumSwaps;
}

const arr1 = [3, 7, 6, 9, 1, 8, 10, 4, 2, 5];
console.log(minimumSwaps(arr1))

// Real solution: 46
const arr2 = [2, 31, 1, 38, 29, 5, 44, 6, 12, 18, 39, 9, 48, 49, 13, 11, 7, 27, 14, 33, 50, 21, 46, 23, 15, 26, 8, 47, 40, 3, 32, 22, 34, 42, 16, 41, 24, 10, 4, 28, 36, 30, 37, 35, 20, 17, 45, 43, 25, 19];
console.log(minimumSwaps(arr2))

const arr3 = [4, 3, 1, 2];
console.log(minimumSwaps(arr3))