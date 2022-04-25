# Player Turn
We want to introduce the idea of player turn. The app should tell the User whose turn it is (either Yellow or Red).

The player turn will also correspond to chips. We want to color the slot to reflect the player turn: when it is Red's turn, then the slot should be Red.

## TODOs
 - [ ] The game should should start by saying that it is Red's turn
 - [ ] Inside of our slot, we should show a Red chip.
 - [ ] When the user clicks on the slot, the player turn should change
   - [ ] The game should now say it is Yellow's turn
   - [ ] The game should display a yellow chip in the slot

## Details
For this, we need to create a state inside of our app that contains information on the player turn. State is responsible for telling us what has happened in the app. In our app, we would like to keep track

We call the `useState` function with our initial state for the app `yellow`. This gives us an array with two values: a variable with the value and a function for updating the value. We call these `playerTurn` and `changePlayerTurn`.

We then create another function called `togglePlayerTurn` that checks the current player turn. If `playerTurn` is `yellow` we use `changePlayerTurn` to change it to `red`. Otherwise we know the player turn is `red` and we change the player turn to `yellow`.

Lastly, we want to display this information in our app. We use curly bracket, `{` and `}`, to signal we want the information between to be displayed.

For the slot color, we simply need to create two CSS rules that change the `background-color` to `red` and `yellow` respectfully. We want to include this rule in our slot depending on the player turn: when our `playerTurn` is `red` we want a style attribute of `red`.

It is no coincidence that both the css class and value in playerTurn are called `red`. This makes it easy to refer to both the value in `playerTurn` and our CSS class with the same value. How would it look if we called our css property `red-slot`?

## Further Reading
 - [https://www.google.com/search?q=react+use+state](react use state) for reactjs documentation on how to handle state in react
 - [https://www.google.com/search?q=computer+science+state](computer science state) for a wikipedia article on general consideration
