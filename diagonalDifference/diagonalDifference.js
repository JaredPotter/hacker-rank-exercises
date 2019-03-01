function diagonalDifference(arr) {
    let matrixSize = arr.length;
    let maxIndex = matrixSize - 1;
    let diagonalLeftToRightSum = 0; //arr[0][0] + arr[1][1] + arr[2][2];
    let diagonalRightToLeftSum = 0; //arr[0][2] + arr[1][1] + arr[2][0];

    for (let i = 0; i < matrixSize; i++) {
        diagonalLeftToRightSum += arr[i][i];
        diagonalRightToLeftSum += arr[i][maxIndex - i];
    }

    let result = Math.abs(diagonalLeftToRightSum - diagonalRightToLeftSum);

    return result;
}