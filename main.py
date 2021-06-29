# Function to find best way to cut a rod of length n
# where rod of length i has a cost price[i-1]
def rodCut(price, n):

	# base case
	if n == 0:
		return 0

	maxValue = float('-inf')

	# one by one partition the given rod of length n into two parts of length
	# (1, n-1), (2, n-2), (3, n-3), .... (n-1 , 1), (n, 0) and take maximum
	for i in range(1, n):

		# rod of length i has a cost price[i-1]
		cost = price[i] + rodCut(price, n - i)

		if cost > maxValue:
			maxValue = cost

	return maxValue


if __name__ == '__main__':

	# length = [ 1, 2, 3, 4, 5, 6, 7, 8 ]
	price = [0, 1, 5, 8, 9, 10, 17, 17, 20]

	# rod length
	n = 4

	print("Profit is", rodCut(price, n))
