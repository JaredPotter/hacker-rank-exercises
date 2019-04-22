function maximumToys(prices, k) {
    const sortedPrices = prices.sort((a, b) => { return a - b; });
    let currentMoney = k;
    let index = 0;
    let currentPrice = sortedPrices[index];
    let toyCount = 0;

    while (currentMoney > 0 && currentPrice <= currentMoney) {
        if (currentPrice <= currentMoney) {
            currentMoney = currentMoney - currentPrice;
            toyCount++;
        }

        index++;
        currentPrice = sortedPrices[index];        
    }

    return toyCount;
}

const money1 = 50;
const prices1 = [1, 12, 5, 111, 200, 1000, 10];
const toyCount1 = maximumToys(prices1, money1);
console.log(toyCount1);