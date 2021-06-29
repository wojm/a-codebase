
/**
 * Short-circuiting is the term applied for combining boolean conditionals 
 */


let i = 1;
if (i++ && i++ && i++) {
	console.log('prints');
}
console.log('i: ' + i); // 4
console.log();

let j = 1;
if (j++ || j++ || j++) {
	console.log('prints');
}
console.log('j: ' + j); // 2
console.log();

/**
 * starting at 0 the output looks a little different. There are two components at play
 *  - short-circuiting as described above
 *  - k++ will increment after the operation evaluates
 */
let k = 0;
if (k++ && k++ && k++) { 
	console.log('prints');
}
console.log('k: ' + k); // 1

