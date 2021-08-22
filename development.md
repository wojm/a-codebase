# Development
A good development process will introduce small, validated changes.

## Terminal
Terminal is an application that gives a user a command line for interacting with their operating system. The command line runs text commands.

### Installation
#### Mac
Look for the Terminal Application

#### Linux
Look for the Terminal Application

#### Windows
Use [GitBash](https://gitforwindows.org/). Command Line is a similar tool, but the specifics of working with it will look very different.

### Common Commands
```sh
ls # list all
pwd # list the current working directory
cd ~ # move to the root directory
cd ~/Documents # move to the documents folder
mkdir ~/dev # make a directory (folder) called dev in the root folder
```

## Requirements
### Docker
Docker provides a declarative way of defining context.

#### Installation
To install, follow these [instructions](https://www.docker.com/get-started)

##### Verificaiton
```
docker build -t latest .; docker run latest
```
This will output:
```
hello from Dockerfile
```
