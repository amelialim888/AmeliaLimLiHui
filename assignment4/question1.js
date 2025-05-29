const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
let highestStockPrice = amdPrices[0];

for (let stockPrice of amdPrices){
    if (stockPrice > highestStockPrice) {
        highestStockPrice = stockPrice
    }
}

console.log("AMD 52-week high is ",highestStockPrice)
