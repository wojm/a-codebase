# Web Javascript

Browsers are capable of executing javascript code when they open websites. To run these files, open the html files in a browser. The instructions will guide you to the output.

## Requirements
### Chrome (or equivalent Browser)
Our browser of choice will be Google's [Chrome](https://www.google.com/chrome/). Regardless, there will be equivalent tools in Firefox and Safari.

### Visual Studio Code (or equivalent text editor)
We need a text editor to edit our code. 


## Developer Tools
Most modern browsers come with tools that allow developers to see into their code, both by seeing it in action and seeing details on its results

To Open Developer Tools:
 - View > Developer > Developer Tools
Or
 - Right Click Page > Inspect


## HTML

HTML is the skeleton of a website. It is explicitly the only file type that is required for a browser to show something.

### Tags
Tags define blocks of code. They are opened and closed
```html
<html> </html>
```

Common Types
 - <html> defines an html document
 - <head> defines the meta
 - <body> defines the skeleton
 - <div> recatangles
 - <p> paragraph
 - <h1> biggest header
 - <h2>...<h6> incrementally smaller headers
 - <script> used to execute code
 - [More](https://www.w3schools.com/tags/):

#### Nesting
Nesting is how we define attributes that are contained within others. 

On a website text, images, etc. can be bound within a box on the page.
```html
<div>
    <div></div>
</div>
```

A website is even defined "higher" than whats being displayed
```html
<html>
    <head>
        <!-- meta goes here -->
    </head>
    <body>
        <!-- Visualizations go here, ie div-->
    </body>
</html>
```

Nested objects should be indented once.

On a website we could imagine content defined within the navigation panel

#### Attributes
Tags have attributes that can descripe them. 

```html
<script type="text/javascript">
</script>
```
Here, the attribute is `type` and it's value is `"text/javascript"`

### index.html
Contains an example html file. It contains much more information than is necessary 

## File seperation

We can seperate our javascript code and out html code into two seperate files.

This will be our standard going forward. This will make it easy to have one generic html app and restrict our work to the javascript file.
