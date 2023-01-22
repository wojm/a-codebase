/**
 * Primitives are the simplest building blocks.
 */

/**
 * Boolean
 */
console.log('true: ' +  true );
console.log('false: ' +  false );


/**
 * OR
 */
console.log('OR ||');
console.log('true || true:   ' + (true || true));
console.log('true || false:  ' + (true || false));
console.log('false || true:  ' + (false || true));
console.log('false || false: ' + (false || false));

/**
 * AND
 */
console.log('AND &&');
console.log('true && true:   ' + (true && true));
console.log('true && false:  ' + (true && false));
console.log('false && true:  ' + (false && true));
console.log('false && false: ' + (false && false));

/**
 * NOT
 */
console.log('NOT !');
console.log('! true: ' + (! true));
console.log('! false: ' + (! false));


//
// Advanced
//

/**
 * Javascript also has bitwise operators. Instead of checking true and false. We can compare every bit
 * as if they are true and false. They can be good to know, but are often used infrequently
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
 */

console.log(5 & 13); // 0101 & 1101 = 0101
// expected output: 5;

console.log(parseInt('0101',2) & parseInt('1101',2));
// expected output: 5;

console.log(5 & 13 & 3); // 0101 & 1101 & 0011 = 0001
// expected output: 1;

console.log(5 | 13); // 0101 | 1101 = 1101
// expected output: 13
