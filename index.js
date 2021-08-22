/**
 * Imperative programming is a programming paradigm that revolves around changes to state
 * 
 * Iteration is a great example. In these example our code proactively changes state and 
 * then does somethin
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
 */

/**
 * For loop
 * 
 * for (<initial state>; <condition>; <increment>)
 */
for (let i = 0; i < 10; i++) {
	console.log(i);
} // 0 1 2 3 4 5 6 7 8 9

const myArr = ['this', 'is', 'an', 'array'];


/**
 * For each
 * 
 * Iterate through each of the elements in an array or object
 */
for (const index in myArr) {
	console.log(index);
} // 0 1 2 3

for (const word of myArr) {
	console.log(word);
} // this is an array

const person = {
	'first_name': 'Bob',
	'last_name': 'Saget',
	'career': 'acting',
};

for (const key in person) {
	console.log(key);
} // first_name last_name career


/**
 * While loop
 * 
 * This is less popular in javascript as it can usually be written as a for loop
 * This is the equivalent of the above for-loop
 */
let i = 0;
while (i < 10) {
	console.log(i);
	i++;
}
