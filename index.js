/* eslint-disable no-constant-condition */

/**
 * If Statements help direct the flow of your code
 */

if (true) {
	console.log('This will print');
} else {
	console.log('This will not print');
}

if (false) {
	console.log('This will not printt');
} else {
	console.log('This will print');
}

/**
 * else if can be used to add more cases
 */

if (false) {
	console.log('This will not printt');
} else if (true) {
	console.log('This will print');
} else if (true) {
	console.log('This will not printt');
}

/**
 * Prints can be nested as well
 */

if (true) {
	if (true) {
		console.log('This will printt');
	}
} else if (false) {
	if (true) {
		console.log('This will not printt');
	}
}

/**
 * We can evaluate in if statements
 */
if (0 === 0) {
	console.log('This will print');
} else {
	console.log('This will not print');
}

/**
 * We can use variables in 
 */
const name = 'matt';
if (name === 'matt') {
	console.log('This will print');
} else {
	console.log('This will not print');
}

/**
 * we can also evaluate expressions which leads to some interesting examples 
 */

let i = 0;
if (i++ === 2) {
	console.log('This will not print');
} else if (i++ === 2) {
	console.log('This will not print');
} else if (i++ === 2) {
	console.log('This will not print');
} else if (i++ === 2) {
	console.log('This will print, this will execute because it is after the evaluation');
}

i = 0;
if (++i === 2) {
	console.log('This will not print');
} else if (++i === 2) {
	console.log('This will not print');
} else if (++i === 2) {
	console.log('This will print, because it is executed before the evaluation');
} else if (++i === 2) {
	console.log('This will not print');
}


