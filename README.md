# Jest

Jest is a javascript testing framework. There are many testing frameworks. This one is popularized by Facebook and is known for its integration with React and being able to render components during tests.

[Documentation](https://jestjs.io/docs/en/getting-started.html)

## Installation
### For this repository
When you install the node_modules at the root of this repository, they will import these files into nod
```sh
npm ci
```

### For new a repository
This will add jest to our `package.json` as well as importing it into `node_modules`. We add the `--save-dev` flag as it is a testing suite and those are not used in production so we want to designate it as development
```sh
npm install --save-dev jest
```

### Globally

We can also install jest to be from anywhere by installing it globally with:
```
npm install --global jest
```

We would call it with:
```sh
jest
```
We have access to this through the NODE_PATH, which like PATH and PYTHON_PATH references a set of folders. These folders have the binary files that we 

## Running Testing Suites
We call the jest file directly from node_modules
### Running all tests
```sh
npx jest .
```

### Running a specific test
```sh
npx jest <filename>
```
