function compareTriplets(a, b) {
    let aCount = 0;
    let bCount = 0;
    
    for (let i = 0; i < a.length; i++) {
        let currentA = a[i];
        let currentB = b[i];

        if (currentA > currentB) {
            aCount++;
        }
        else if (currentA < currentB) {
            bCount++;
        }
    }

    return [aCount, bCount];
}