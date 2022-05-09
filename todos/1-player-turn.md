# Player Turn
We want to introduce the idea of player turn. The app should tell the User whose turn it is (either Yellow or Red).

The player turn will also correspond to the circle color of the chip. We want to color the slot to reflect the player turn: when it is Red's turn, then the slot should be Red.

## TODOs
 - [ ] The game should should start by saying that it is Red's turn
 - [ ] Inside of our slot, we should show a Red chip.
 - [ ] When the user clicks on the slot, the player turn should change
   - [ ] The game should now say it is Yellow's turn
   - [ ] The game should display a yellow chip in the slot

## Implementation Details
### Create a State Variable to Track Player Turn
We need to create a state inside the <App> component that contains information on the player turn. State is responsible for telling us what has happened in the app. In our app, we would like to keep track of the player's turn.

We create a state variable by calling the `useState` function with an initial state of `red`. The `useState` function returns an array with two values: a variable with the value of the state variable and a function for updating the value of the state variable. We call these `playerTurn` and `changePlayerTurn`.

### Create a Toggle Function
We then create another function called `togglePlayerTurn` that checks the current player turn. If `playerTurn` is `red` we use `changePlayerTurn` to change it to `yellow`. Otherwise we know the player turn is `yellow` and we change the player turn to `red`.

### Add an Event Handler to the Slot and Display the Turn
When the slot is clicked, we want the `togglePlayerTurn` function to be executed, so we add an event handler to that HTML element. To display the `playerTurn` value to the user, we add a new `<div>` in our <App> component that says something like "It's red's turn." But instead of hard-coding the value `red`, we want to embed the `playerTurn` variable into the JSX by using curly brackets, `{` and `}`, to signal that we are using JavaScript inside of our HTML. 

### Change the Slot Color
Currently, the slot `<div>` already has a specific class name assigned to it that contols the height, width and shape of the slot. We want to add a new class, that updates the color based on the player turn: when our `playerTurn` is `red` we want a style attribute of `red`. 
 
First, we create two CSS class names in `styles.css` that change the `background-color` to `red` and `yellow` respectfully. We name these classes `.red` and `.yellow` respectively so that we can link it to the `playerTurn` later. 
 
Next, we want to update the slot's classes to include the new class name for the colors in addition to keeping the former class name that describes the slot's size and shape. Since the color class name, `playerTurn`, is a variable you'll need to use special syntax that includes some backticks (`` ` ``) and a dollar sign (`$`). The syntax for using multiple class names, with one being a variable,  is the third example in [this documentation](https://medium.com/@christopherpecoraro/how-to-use-variables-strings-inside-classname-attributes-in-gatsby-7baebf360b05). 


## Further Reading
 - [React Use State](https://www.google.com/search?q=react+use+state) - ReactJS documentation on how to handle state in react
 - [Computer Science State](https://www.google.com/search?q=computer+science+state)- a Wikipedia article on general consideration
