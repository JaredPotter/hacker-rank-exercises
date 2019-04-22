// Binary searched based on https://codeburst.io/binary-search-in-javascript-a-practical-example-7fda60ce59a1

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

const target1 = 6;
const array1 = [1, 2, 4, 76, 44, 23, 12, 45, 76, 33, 13, 15, 7];
const sortedArray1 = array1.sort((a, b) => {return a - b;});
let closestPoint1 = binarySearch(sortedArray1, target1, 0, sortedArray1.length - 1);
console.log(closestPoint1);