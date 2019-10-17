

function getMaxProfit(stockPrices) {
    let largestProfit = Number.MIN_SAFE_INTEGER;

    let smallest = stockPrices[0];
    for (let i = 1; i < stockPrices.length; i++) {
        if (stockPrices[i] - smallest > largestProfit) {
            largestProfit = stockPrices[i] - smallest;
        }
        smallest = Math.min(smallest, stockPrices[i]);
    }
    return largestProfit;
}

console.log(getMaxProfit([10,7,5,8,11,9]))