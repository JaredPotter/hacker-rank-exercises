// Match pairs of socks

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    let sockCounts = ar.reduce((sockCounter, sock) => {
        const stringKey = sock + '';

        if (sockCounter[stringKey]) {
            sockCounter[stringKey]++;
        }
        else {
            sockCounter[stringKey] = 1;
        }

        return sockCounter;
    }, {});

    let totalPairs = 0;

    for (let key in sockCounts) {
        const count = sockCounts[key];
        totalPairs += Math.floor(count / 2);
    }

    return totalPairs;
}