# Babel

Babel is a transpiler. It takes one version of javascript code and turns it into another. This is very helpful when we run our code in an environment that does not support features we would like to use. 


In fact, one of the popular ways to import files `import _ from 'file';` is not implemented as part of node yet.

Documentation: https://babeljs.io/

## .babelrc
The [.babelrc](./.babelrc) file is responsible for the specifications that we want to transpile from.

## Babel-node
```sh
./node_modules/babel-cli/bin/babel-node.js <filename>
```
will call node with all the babel preferences
