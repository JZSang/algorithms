function change(amount, denominations) {
    let ways = new Array(amount+1).fill(0);
    ways[0] = 1;

    denominations.forEach(coin => {
        for (let high = coin; high <= amount; high++) {
            const remainder = high - coin;
            ways[high] += ways[remainder];
        }
    })
    console.log(ways)
    return ways[amount]
}

console.log(change(24972, [1,2,3]))