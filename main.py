# Class demonstration in python


class Person():
	def __init__(self, first_name, last_name = ""):
		"""
		The function defined by __init__ is called the Constructor. This function
		defines how we create this object

		Here we pass in a first_name and a last_name value. We assign the last_name the
		default value None so that we can initialize a this class with just one word. 
		Here are two valid options:
		
		instructor = new Person("Matt", "Wojo")
		celebrity = new Person("Rihanna")
		"""
		self.first_name = first_name # assign first name to instance
		self.last_name = last_name # assign last name to the instance

	def full_name(self):
		"""
		the function full_name is a declared on the class instance. It has access to all our 

		instructor.full_name() # Matt Wojo
		"""
		return f'{ self.first_name } { self.last_name }'

	# declare a static variable on the class with an initial value of 0
	greetings_used = 0

	@staticmethod
	def greeting():
		"""
		We can define functions that exist on the all instances of a given class. This way we can 
		refer to a global value and make decisions based on it.

		This function allows us to alternate our greeting
		"""
		Person.greetings_used = Person.greetings_used + 1
		return ['Hello, ', 'Greetings! '][ Person.greetings_used % 2] # alternate greetings

	def greet(self):
		"""
		This function has side-effects
		"""
		print(f'{ Person.greeting() } { self.first_name }')


instructor = Person("Matt", "Wojo")
print(instructor.full_name()) # Matt Wojo
instructor.greet() # Hello Matt Wojo
# Question: Why is print necessary in some cases but not others?

celebrity = Person("Rihanna")
print(celebrity.full_name()) # Rihanna
celebrity.greet() # Greetings! Rihanna
celebrity.greet() # Hello Rihanna

