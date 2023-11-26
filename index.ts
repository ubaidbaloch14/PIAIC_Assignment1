//Task 1

// // Simulating a shopping scenario

// // Shopping Categories

// let fruitsSection = ["Apple", "Banana", "Grapes", "Mangoe"];
// let vegetableSection = ["Potatoe", "Carrot", "Ginger", "Onion"];
// let GroceriesSection = ["Soap", "Shampo", "Oil", "Paste"];

//Scenario 1 - Buying Groceries

let wantFruits = true;
let wantVegetables = false;

let fruitsAvailable = ["Apple", "Banana", "Orange"];
let vegetablesAvailable = ["Carrot", "Ginger", "Onion"];

let totalBill = 0;

// Check if the customer wants fruits or vegetables
if (wantFruits) 
{
    console.log("Welcome to the fruits section!");
    // Display and calculate the cost of each fruit
    for (let fruit of fruitsAvailable) 
    {
        console.log(`- ${fruit}`);
        totalBill +=2 //assume each fruit costs $2
    }
}

else if (wantVegetables) 
{
    console.log("Welcome to the Vegetable Section!");
    // Display and calculate the cost of each vegetable
    for (let vegetable of vegetablesAvailable) 
    {
        console.log(`- ${vegetable}`);
        totalBill += 1.5; // Assume each vegetable costs $1.5
    }
}
// Display the total bill
console.log(`Total Bill: $${totalBill.toFixed(2)}`);

// Scenario 2 - Checking Discounts 

if (totalBill > 10)
{
    console.log("Congratulations! You got 10% off.");
    totalBill *=0.9;  // Apply 10% discount
}
// Display the discounted total
console.log(`Discounted Total: $${totalBill.toFixed(2)}`);

// Scenario 3 - Checkout Process
console.log("Please choose a payment method:");
let paymentOptions = ["Credit Card", "Debit Card", "Cash"];

// Display available payment options using a loop
for (let option of paymentOptions) 
{
    console.log(`- ${option}`);
}

let selectedOption = "Debit Card"; // Assuming the user selects the Debit Card
// Use a switch statement to handle different payment methods
switch (selectedOption)
{
    case "Credit Card":
        console.log("Payment successful with credit card. Thank you!");
        break;
    case "Debit Card":
        console.log("Payment successful with credit card. Thank you!");
        break;
    case "Cash":
        console.log("Payment successful with credit card. Thank you!");
        break;
    default:
        console.log("Invalid Payment Option. Payment Failed.")
        break;
}


// Task 2

// Scenario 1: Sum Numbers
function add(num1: number, num2: number): number {
    // Adding two numbers and returning the result
    return num1 + num2;
}

// Scenario 2: Check Even or Odd
function checkEvenOrOdd(num: number): string {
    // Checking if the number is even or odd and returning a string
    return num % 2 === 0 ? "Even" : "Odd";
}

// Scenario 3: Calculate Area
function calculateArea(width: number, height: number): number {
    // Calculating the area of a rectangle and returning the result
    return width * height;
}

// Scenario 4: String Reversal
function reverseString(inputString: string): string {
    // Reversing a given string using split, reverse, and join
    return inputString.split('').reverse().join('');
}

// Scenario 5: Temperature Conversion
function convertCelsiusToFahrenheit(celsius: number): number {
    // Converting temperature from Celsius to Fahrenheit
    return (celsius * 9/5) + 32;
}

// Example Usage
console.log("Scenario 1 - Sum Numbers:", add(5, 8));
console.log("Scenario 2 - Check Even or Odd:", checkEvenOrOdd(7));
console.log("Scenario 3 - Calculate Area:", calculateArea(4, 6));
console.log("Scenario 4 - String Reversal:", reverseString("Hello, TypeScript!"));
console.log("Scenario 5 - Temp Conversion:", convertCelsiusToFahrenheit(25));



// Task 3

// Scenario 1 - Modify Array with Methods
let initialArray: number[] = [1, 2, 3, 4, 5];

// Display the initial array
console.log("Initial Array:", initialArray);

// Using push to add elements to the end
initialArray.push(6, 7);
console.log("After push:", initialArray);

// Using pop to remove the last element
initialArray.pop();
console.log("After pop:", initialArray);

// Using shift to remove the first element
initialArray.shift();
console.log("After shift:", initialArray);

// Using unshift to add elements to the beginning
initialArray.unshift(-2, -1, 0);
console.log("After unshift:", initialArray);

// Scenario 2 - Subarray Creation
let originalArray: string[] = ["apple", "banana", "orange", "grape", "kiwi"];

// Using splice to create a subarray by removing elements
let removedElements: string[] = originalArray.splice(2, 2);
console.log("Original Array after splice:", originalArray);
console.log("Removed Elements:", removedElements);

// Using slice to create a subarray without modifying the original array
let subArray: string[] = originalArray.slice(1, 4);
console.log("Original Array after slice:", originalArray);
console.log("Subarray created with slice:", subArray);
