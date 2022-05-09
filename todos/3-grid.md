# Grid
We want to create 7 Columns. Each column should allow the user to click the Column and a token should fill the bottom slot for the corresponding Column. React Components will help in

## TODOs
 - [ ] Create a React Component called `Column` that takes the current logic in `App` and then use that component in `App`.
   - [ ] Create the `Column` Component
   - [ ] Create a `Column` in `App`
   - [ ] Pass the `addTokens` and `tokens` into `Column` as Props
   - [ ] Use the `tokens` to display the tokens in the column
   - [ ] Use `addTokens` to update the column when it is clicked
 - [ ] Create 7 Columns
   - [ ] These Columns should use a `display` that orients them in the same row.
 - [ ] When clicking on a Column, we want only that column to update.
	- [ ] We want a state for each column.
    	- We can create a state for the entire board which would be an array of 7 empty arrays: `[[], [], [], [], [], [], []]`
    	- [ ] This will give us a `board` variable and an `updateBoard` function that can be used to update the `board`.
  	- [ ] We want to pass the corresponding tokens to the correct Column
    	- [ ] Fill the initial data with random bits of `'red'` and `'yellow'` to see that it is being displayed correctly
  	- [ ] Define a `playColumn` function that takes in an argument `columnNumber`. This function should update the column corresponding to `columnNumber` with a chip from the current `playerTurn`.
    	- [ ] `playColumn` should look up the column in `board` with `board[columnNumber]`
    	- [ ] We want to ensure that `board[columnNumber]` has space for another token
    	- [ ] We want to update `board[columnNumber]` by appending the current `playerTurn`
    	- [ ] We want to use `updateBoard` with our board to trigger a rerender of the graphics.
- [ ] Each column should call `playColumn` with an index representing it's column Number. The first `Column` should take an `onClick` property that will call `playColumn` with the value 0, like `playColumn(0)`


## Details
Given a column we want to create multiple columns. Simple repetition could be used to do this; however, this could lead to a lot of code. We want to use Components to repeat our code.

To create a component, we define a `function` with the name `Column`. This function should return the values that correspond to the column we created beforehand. We then call this function inside of our `App` function by treating it as an html element `<Column></Column>`. We want 7 of these Columns.

We can pass values into `Column` from it's use in App by passing values like HTML properties. Here we want to pass the property `onClick=` with the function in the variable `addToken` by using curly brackets, `{}`, to pass the value. We also want to pass `tokens=` with the value in `tokens`.

In the Component `Column`, we now have access to a `props` argument which will contain two values `props.onClick` and `props.tokens` which correspond to the properties that were used to pass in the values.

We can easily create 7 Columns by copying our `<Column...</Column>` value 7 times. We want to ensure it displays correctly with the correct `display` property.

This should get us to a place where we have 7 Columns but they all behave identically. When we update one Column, all Columns will show the update. This is because they all reference the same data. We want data for each column.

We will call `useState` with the initial state of a board which is an array of 7 empty arrays `[[], [], [], [], [], [], []]`. This will give us a `board` variable and an `updateBoard` function.

We want to pass each `Column` the corresponding array from board so the first column will want `board[0]`. The second column will want `board[1]`.

We can now pass in an arbitrary board to our `board` variable and it should display correctly. For example, if we set `board` to `[['red'], ['yellow'], [], [], [], [], []]` we should see the first column with one `red` token and the second column with one `yellow` token.

We will want to define a function `playColumn` which takes in a `columnNumber` argument. This can be done with `function playColumn(columnNumber) {}`. This function will add the current `playerTurn` to the correct column. We will want to reference that column with the index passed in via `columnNumber` with `board[columnNumber]`. We will want to check if this column has space (ie less than 6 tokens). If there is space we want to update the column with the `playerTurn` value at the end. We also need to update `board` to reference the new array we are making. After doing this, we want to call updateBoard with our existing board to trigger a rerender of graphics.

## Further Reading
 - [https://www.google.com/search?q=react+component](react component) for a reactjs documentation on react components
 - [https://www.google.com/search?q=html+horizontal+orientation](html horizontal orientation) to see css properties for displaying elements horizontally in a row
 - [https://www.google.com/search?q=react+useState+array+of+arrays](react usestate array of arrays) for a query on how people use array of arrays. The results will tell you that updating an array of arrays is tricky.
