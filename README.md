# NPM
Node Package Manager is responsible for importing and managing dependencies. It will install into `node_modules` folder. Although we create this folder, we do not actually commit this code to our repository. Instead we create two files that specify exactly what is in that code. Here we simply reference other people's code via version numbers. Thus we are always able to recreate our code in the exact same way.


## Installing NPM
NPM should have been installed when we installed Node. You can refer back to the [website](https://nodejs.org/en/download/

## NPX
npx is a command that allows us to directly run the modules we have imported into `node_modules`. We will be able to call commands like
```
npx jest .
```
to call our testing suite (jest)
or
```
npx babel-node 1-courses/1-javascript/1-fundamentals/0-getting-started/1-node/index.js
```
to run a file through `babel-node`

## Packages
Packages are defined in `package.json` and `package-lock.json`

### Installing current repository
We install the current specifications according to both `package.json` and `package-lock.json` through
```sh
npm ci
```

### Adding new
```sh
npm install <package-name>
```

### Installing globally
```sh
npm install -g <package-name>
```
will install a package globally. Afterwards, we will be able to call `<package-name>` in our command-line.

For packages that are required for a repository, it's my belief, that it is better to call the node_modules package directly as this will limit the number of errors as a result of different versions.

### Package.json
The package.json file is responsible for specifying desired imports. We specify our imports in a key value pair that looks as follows:
```
    "upper-case": "^1.1.3"
```
Upper-case is a packagee registered with [npm](https://www.npmjs.com/). It has many published versions specified by it's version tag.

To execute
```sh
npm install # see if there is a package-lock.json file
```

### Pinning
We specify a range of versions through pins
 - `^1.2.3` latest minor version, so greater than `1.2.3` but less than `2.0.0`
 - `~1.2.3` latest patch version, so greater than `1.2.3` but less than `1.3.0`
 - `1.2.3` pinned version. Only use version `1.2.3`


### Package-lock.json
Since `package.json` can specify ranges, we want to take the general rule and get a consistent version number. This way when we run our code, it is independent of a new release from one of our dependencies. Senior devs will be responsible for updating  `package-lock.json` file by typing:
```sh
npm install
```
and ensuring that nothing is broken.

### Semantic Versioning (semvar)
Semantic versioning is responsible for specifiy how things should be versioned. It contains 3 numbers:
 - `major`: number responsible for major changes. Not backwards compatible, tests likely changed
 - `minor`: number responsible for minor changes. Should be backwards compatible and pass all tests.
 - `patch`: patch numbers are updated when errors are discovered and we want fix them. We should always be using the latest patch of a software, and if we push out a patch, it should never break anything

Companies have varying standards to adhering the

