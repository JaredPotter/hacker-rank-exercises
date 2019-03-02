function birthdayCakeCandles(ar) {
    let maxHeight = Math.max.apply(null, ar);;
    let blowOutCount = 0;

    for (let height of ar) {
        if (height >= maxHeight) {
            blowOutCount++;
        }
    }

    return blowOutCount;
}