

/**
 * Conditionals are expressions for comparing objects
 */

/**
 * Less than, greater than, less than or equal, greater than or equal.
 */

console.log('0 < 1');
console.log( 0 < 1 ); // true
console.log('0 > 1');
console.log( 0 > 1 ); // false
console.log('0 < 0');
console.log( 0 < 0 ); // false
console.log('0 > 0');
console.log( 0 > 0 ); // false

console.log('0 <= 1');
console.log( 0 <= 1 ); // true 
console.log('0 >= 1');
console.log( 0 >= 1 ); // false
console.log('0 <= 0');
console.log( 0 <= 0 ); // true
console.log('0 >= 0');
console.log( 0 >= 0 ); // true 
console.log();


/**
 * Equality 
 * 
 * There are two ways to do equality:
 *  - '=='
 *  - '===' - use this one!
 */

console.log('0 === 0');
console.log( 0 === 0 ); // true
console.log('0 === 1');
console.log( 0 === 1 ); // false
console.log();

console.log('"0" == 0');
console.log( '0' == 0 ); // true
console.log('"0" === 0');
console.log( '0' === 0 ); // false
console.log();


/**
 * Combining Conditionals
 * 
 * Since these conditional operators result in boolean values, we can combine them ass we would boolean values
 * This is simply because the individual comparison will first evaluate and then we will evaluate the 
 * boolean algebra
 */
console.log( 0 < 1 || 0 === 1); // another way to do less than or equal to

