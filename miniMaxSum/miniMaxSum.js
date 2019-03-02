function miniMaxSum(arr) {
    let n = arr.length;
    let permutations = [];

    for (let i = 0; i < n; i++) {
        let tempArr = [];

        for (let j = 0; j < n; j++) {            
            if (j != i) {
                tempArr.push(arr[j]);        
            }
        }

        permutations.push(tempArr);
    }

    let sums = [];

    for (let a of permutations) {
        let sum = a.reduce((accum, value) => accum += value, 0);

        sums.push(sum);
    }

    sums = sums.sort();
    let min = sums[0];
    let max = sums[sums.length - 1];
    let resultString = min + ' ' + max;

    console.log(resultString);
}