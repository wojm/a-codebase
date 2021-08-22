

/**
 * Variables are used to store temporary data. 
 * 
 * There are 3 ways to declare variables: const, let, var.
 * 
 * Generally, stick with const unless 
 */

/**
 * const - refers to a constant pointer. Meaning the pointer or value cannot change. 
 */
const myVar = 0;
// myVar now has the value of 0 
console.log(myVar); // 0

/**
 * let - refers to a variable that is strictly scoped to the 
 */

let i = 0;
console.log(i); // 0
i = i + 1; // 
console.log(i); // 1

i++; // another way of writing i = i + 1
console.log(i); // 2
i += 1; // another way of writing i = i + 1
console.log(i); // 3

// i++ operates after the operation it is a part of
console.log(i++); // 3
// whereas ++i will happen first
console.log(++i); // 5

/**
 * var - can also be update. It has small nuance on how it's defined and how long it exists. 
 * Generally, do not use, as it the memory it allocates does not get cleaned up
 * 
 * https://codeburst.io/difference-between-let-and-var-in-javascript-537410b2d707
 */
