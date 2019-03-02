function plusMinus(arr) {
    let length = arr.length;
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;

    for (let e of arr) {
        if (e > 0) {
            positiveCount++;
        }
        else if (e < 0) {
            negativeCount++;
        }
        else if (e == 0) {
            zeroCount++;
        }
    }

    console.log(positiveCount / length);
    console.log(negativeCount / length);
    console.log(zeroCount / length);
}