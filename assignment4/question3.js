const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
let totalPrice = 0;
let averagePrice = 0;
let abovePrice = 0;

for (let count=0 ; count < amdPrices.length; count++){
    totalPrice += amdPrices[count];
}

averagePrice = totalPrice / amdPrices.length

for (count=0 ; count < amdPrices.length; count++){
    if (amdPrices[count] > averagePrice) {
        abovePrice += 1;
    }
}

console.log("Number of days AMD was above the 7-day SMA is:  ",abovePrice)