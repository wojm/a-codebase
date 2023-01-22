
/**
 * Strings are a series of characters. A character is a primitive.
 * 
 * Strings are  immutable, that means emthods acting on a string returns a new string
 * 
 * This document contains commonly used properties and methods. For a more thorough list visit the documentation: 
 *  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 */

console.log('Within these quotes is a string');

/**
 * Properties
 */

/**
 * Length - how many characters are in this string
 */

console.log('length of 12'.length);

/**
 * Methods - are functions that act on strings
 */


/**
 * Template literals allow us to add content directrly into strings
 */
const num = 42;
console.log(`My favorite number is (${ num }). Pay attention to the spacing.`);
