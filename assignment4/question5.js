const disneyData = [
	{
		open: "120.54",
		high: "122.56",
		low: "120.54",
		close: "121.09"
	},
	{
		open: "123.15",
		high: "127.76",
		low: "123.02",
		close: "124.92"
	}
];

// Write your code below
let total = 0;
let average = 0;
let formattedData = 0;

for (let i=0 ; i < disneyData.length; i++ ){
	formattedData = parseFloat(disneyData[i]["close"])
	total += formattedData
}

average = total / disneyData.length

console.log("Average closing price of Disney is ",average.toFixed(2))