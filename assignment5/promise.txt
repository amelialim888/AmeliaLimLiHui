console.log("External Script: Hello World");

// = operator represents assignment
// create the variable
let stockPrice
//Assign a value to it
stockPrice = 100
// do more thing to the variable
stockPrice = 300
console.log('Stock Price:', stockPrice)

stockPrice = 300 + 50
console.log('Stock Price:', stockPrice)

stockPrice += 50
console.log('Stock Price:', stockPrice)

stockPrice *= 2
console.log('Stock Price:', stockPrice)

let money = 6000
money += 3000
console.log('Money:', money)
money *= 3
console.log('Money:', money)
//const penPrice = 100
//penPrice = 100000

/*Endless loop for the popup msg
while(true){
    /*This will create pop msg*
alert("This is an alert")
} */

let company = "Microsoft";
let desc = "is an IT company";

console.log(company + " " + desc); // Output: "Microsoft is an IT company"

let closingPrice = 200.92;

console.log(company + " ended the trading session with a closing price of " + closingPrice);

const companyName = "Amazon"
const companyRating = 5
console.log(companyName+" has a customer satisfaction of "+companyRating)

const formattedDisplay = companyName+" has a customer satisfaction of "+companyRating
console.log(formattedDisplay)

//%s place holder for string
//%f place holder for float
console.log("%s ended the trading session with a closing price of %f", company, closingPrice);

const welcome_string = "Welcome to a world of JavaScript";
let char = welcome_string[3]; //display 3rd character, string array of characters
console.log(char); // outputs "c" to the console

char = welcome_string.substring(0,7); // pass in start and end index exclusive
console.log(char); // outputs "Welcome" to the console

console.log(welcome_string.indexOf('world'))
console.log(welcome_string.length)

let companyName1 = "Metaa"
let formattedcompanyName1 = companyName1.substring(0,4)
console.log(formattedcompanyName1)
console.log(formattedcompanyName1.toUpperCase())

let age = "5";

// Before Conversion
console.log(typeof(age)); // string

// After Conversion
age = parseInt(age);
console.log(typeof(age)); // number 

//Exercise 6
const DayOneClosingPrice = "87.14";
const DayTwoClosingPrice = "84.22";

const average = (parseFloat(DayOneClosingPrice) + parseFloat(DayTwoClosingPrice))/2
console.log(average)

//3.3.1 Array
const myArray = ["Hello","World","Apple"]
console.log(myArray[1])

myArray.push("some element") // insert to the back of array
console.log(myArray)

myArray.pop() // remove the last element
console.log(myArray)

//Exercise 7
const TSLAClosingPrices = [230.12, 221.45, 225.61, 219.48, 227.52]

let totalSum = 0
totalSum = TSLAClosingPrices[0]+ TSLAClosingPrices[1] + TSLAClosingPrices[2] + TSLAClosingPrices[3] + TSLAClosingPrices[4]

const averageSum = totalSum/ 5;
console.log(averageSum)


// 3.4 Objects
const userObject = {
    "name":"Jeremy",
    "id":3456789,
    "email":"user1@abcdefg.com" //property of object
}

console.log(userObject.name) // dot notation
console.log(userObject["email"]) // square brackets

//console.log(userObject["strange key"]) //spaces need to use square bracket

// Exercise 9

//(45 - 20) > 4 * 20 
//20 > 80 False

//2 * 3 < 4 * 5 || 90 - 45 > 4**3 
//True || False Answer is True
//short circuit = True, one side is true, the other side will be ignore

//100 / 10 < (4 + 5) / 2 && !(32 < 20)
//false

//Exercise 10
const stockOHLC = {
	open: 81.12,
	high: 82.59,
	low: 80.09,
	close: 84.71,
}

if (stockOHLC.open == stockOHLC.close) {
    console.log("They are equal")
} 

if (stockOHLC.open > stockOHLC.close) {
    console.log("stock is bearish")
}

if (stockOHLC.open < stockOHLC.close) {
    console.log("stock is bullish")
}
