

/**
 * Functions are ways to repeat functionality.
 *
 * Along with functions you generally include a comment describing the function called a signature
 */


/**
 * convert from fahrenheit to celsius
 *
 * @param { number } fahrenheit
 */
function fahrenheitToCelsius(fahrenheit) {
	return (5/9) * (fahrenheit - 32);
}
console.log( fahrenheitToCelsius(32) ); // 32F => 0C

/**
 * First Order Objects
 *
 * In javascript, like in python, functions are first order objects and can be assigned to variables
 */

/**
 * convert from fahrenheit to celsius
 *
 * @param { number } celsius
 */
const celsiusToFahrenheit = function(celsius) {
	return (celsius * 9 / 5) + 32;
};
console.log( celsiusToFahrenheit(0) ); // 0C => 32F


// functions can be nested
console.log( fahrenheitToCelsius(celsiusToFahrenheit(0))); // 0C => 32F => 0C

/**
 * Arrow Notation is a shorthand way of describing functions
 * If there are no curly brackets around a function, then only one value is passed and it
 * is automatically returned. If we use curly brackets, we need to pass in a value.
 *
 * If there is only one argument, the parenthesis are optional
 *
 * The key difference in arrow notation is that the keyword "this" continues to reggerence
 */

/**
  * convert celsius to Kelvin
  *
  * @param { number } celsius
  */
const celsiusToKelvin = (celsius) => celsius + 273.15;
const celsiusToKelvin2 = celsius => {
	return celsius + 273.15;
};
console.log(celsiusToKelvin2(0)); // 273.15

// We can define functions that call other functions
/**
 * translate from fahrenheit to Kelvin using Celsius as an intermediary
 *
 * @param { number } fahrenheit
 */
function fahrenheitToKelvin(fahrenheit) {
	const celsius = fahrenheitToCelsius(fahrenheit);
	return celsiusToKelvin(celsius);
}
console.log( fahrenheitToKelvin(32) ); // => 273.15



/**
 * Default values
 *
 * Functions can have default values that get used if a value is not passed in. Arguments with default values must
 */
function greet(name = 'World') {
	return 'Hello ' + name;
}
console.log( greet() ); // Hello World
console.log( greet('javascript') ); // Hello javascript


//
// Advanced
//

/**
 * Closure
 *
 * In javascript, functions that reference previously stored variables will continue to store them
 */

/**
 *
 * @param { number } low - lower bound to test
 * @param { number } high - upper bounde to test
 */
function generateInBetweener(low, high) {
	return function(num) {
		return low < num && num < high;
	};
}
const isBetween0And100 = generateInBetweener(0, 100); // this is a function
console.log( isBetween0And100 ); // Function
console.log( isBetween0And100(50) ); // true

// it's important to have good function names
const isPercent = generateInBetweener(0, 1);
console.log(isPercent(1.5)); // false



function incrementerGenerator(incrementBy = 1, startVal = 0) {
	let currentVal = startVal;
	return function() {
		// below is a common pattern when we want to update and increment but we want the incrementing to happen after the retun
		const returnVal = currentVal;
		currentVal = currentVal + incrementBy;
		return returnVal;
	};
}

const incrementer = incrementerGenerator();
console.log(incrementer); // function
console.log(incrementer()); // 0
console.log(incrementer()); // 1

const decrementer = incrementerGenerator(-1, 100);
console.log(decrementer);
console.log(decrementer()); // 100
console.log(decrementer()); // 99

// These two functions have two very different states that do not overlap
console.log(incrementer()); // 2

/**
 * Bind - sometime we will want to overwrite the 'this' value in a function. We can
 * use bind on the function since functions are first-class objects that have properties of their own
 *
 * This is common in the React framework
 */

// This is an abuse of the rule but shows bind
const func = function() {
	return this.value;
};
const boundFunc = func.bind({
	value: 'myvalue',
});
console.log(boundFunc()); // myvalue

