// Modify the code below:

const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82]

// Ascending order
let sortedPrices = amdPrices.sort((x, y) => x - y);

console.log("The three lowest prices are",sortedPrices[0],",",sortedPrices[1],"and",sortedPrices[2]);