/**
 * Classes are ways to combine data and functions togethor. We can force our program to inherit.
 * 
 * DRY (Don't Repeat Yourself) dictates that we should avoid repeating code. Classes, along with
 * functions help us do that. More so, they will 
 * 
 * Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */

class Professional {
	constructor(name, gender) {
		this.name = name;
		this.gender = gender;
	}

	title() {
		return this.gender === 'male'? 'Mr.': 'Mrs';
	}

	/**
     * Greeting is defined here and inherited through all classes that extend Professional
     */
	greeting() {
		return `${this.title()} ${this.name}`;
	}
}

class Doctor extends Professional {
	constructor(name, gender) {
		super(name, gender);
	}

	/**
     * We can overwrite the title function
     */
	title() {
		return 'Dr.';
	}
}

class Captain extends Professional {
	constructor(name, gender) {
		super(name, gender);
	}

	title() {
		return 'Captain';
	}

	/**
     * This function only exists on captain 
     */
	fly() {
		return 'fly baby fly';
	}
}

const marty = new Professional('McFly', 'male');
console.log(marty.greeting()); // Mr. Fry

const doc = new Doctor('Brown', 'male');
console.log(doc.greeting()); // Dr. Brown

const cap = new Captain('America', 'male');
console.log(cap.greeting()); // Captain America

// we can see that the fly function only exists on the Captain Object
console.log(marty.fly); // undefined
console.log(doc.fly); // undefined
console.log(cap.fly); // function
console.log(cap.fly()); // fly baby fly


