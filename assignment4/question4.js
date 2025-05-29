const msftData = [
	[190.15, 196.21, 191.07, 194.44],
	[193.61, 195.89, 190.12, 193.40]
];

// Write your code below
let counter=0;
let total=0;

for (let i=0; i < msftData.length ; i++ ){
	total += msftData[i][3]
	counter += 1;
}

let average = total / counter; 

console.log("Average closing price of MSFT is ",average.toFixed(2))