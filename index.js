
/**
 * Object - a set of key value pairs, where the key is unique
 */

const teach = {
	firstName: 'matt',
	lastName: 'wojo', // also unnecessary comma but generally preferred
};

/**
 * We can reference objects by keys in one of two way
 */
console.log(teach.first_name + ' ' + teach.last_name); // 'matt wojo'

/**
 * This is generally best when the key is dynamic (unknown to us directly)
 */
console.log(teach['first_name'] + ' ' + teach['last_name']); // 'matt wojo'

/**
 * Object class - There is a global Object with common
 * Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
 */

console.log(Object.keys(teach)); // ['first_name', 'last_name']


/**
 * Within an object we can reference 
 */
const teach2 = {
	firstName: 'matt',
	lastName: 'wojo', // also unnecessary comma but generally preferred
	fullName() {
		return this.first_name + ' ' + this.last_name;
	},
};
console.log(teach2.full_name()); // matt wojo
