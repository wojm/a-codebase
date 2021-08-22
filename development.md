# Development
A good development process will introduce small, validated changes.

## Requirements
### Docker
Docker provides a declarative way of defining context.

#### Installation
To install, follow these [instructions](https://www.docker.com/get-started)

##### Verificaiton
```
docker run busybox echo "hello from busybox"
```
The first time this should pull the image from the internet and output:
```
Unable to find image 'busybox:latest' locally
latest: Pulling from library/busybox
...
Status: Downloaded newer image for busybox:latest
hello from busybox
```
In subsequent runs, it will output:
```
hello from busybox
```

## Editors
Editors are used to edit code. Some come with advanced tooling to help edit more efficiently.

### Visual Studio Code
Visual Studio Code (VSCode) is a light-weight editor. It can be downloaded [here](./TODO).

VSCode has a [directory](./vscode) that allows for configuration. More information can be found in it's [README](./vscode/README.md).

### Vim
Vim is a purely text-based editor, that is, it does not allow for mouse interactions. To exit the editor, type `:wq`

### Repl.it
Repl.it is an online editor. It allows for a developer to interact with a repository without having to run it locally on a computer.
