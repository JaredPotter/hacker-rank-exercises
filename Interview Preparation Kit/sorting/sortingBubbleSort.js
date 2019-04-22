function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function countSwaps(a) {
    let count = 0;

    for (let i = 0; i < a.length; i++) {
        for (let j = 1; j < a.length; j++) {
            let currentValue = a[j];
            let nextValue = a[j - 1]

            if (currentValue && nextValue) {
                if (nextValue > currentValue) {
                    swap(a, j - 1, j);
                    count++;
                }
            }
        }
    }

    console.log(`Array is sorted in ${count} swaps.`);
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a[a.length - 1]}`);
}

// Optimized bubble sort.
// Inspired by: http://blog.benoitvallon.com/sorting-algorithms-in-javascript/the-bubble-sort-algorithm/
function optimizedCountSwaps(array) {
    let count = 0;
    let swapped;

    do {
        swapped = false;
        for (var i = 0; i < a.length; i++) {
            if (a[i] && a[i + 1] && a[i] > a[i + 1]) {
                swap(a, i, i + 1);
                swapped = true;
                count++
            }
        }
    } while (swapped);

    console.log(`Array is sorted in ${count} swaps.`);
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a[a.length - 1]}`);
}

const a1 = [3, 2, 1];
const result1a = countSwaps(a1);
const result1b = optimizedCountSwaps(a1);
