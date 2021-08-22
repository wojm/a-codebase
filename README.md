# Getting Started
Bash is a shell scripting language for Unix.
 - shell -> command line user interface, that is you write text
 - scripting -> executed in realtime and not compiled, generally intended to do things once
 - Unix -> Mac and Linux
   - on Windows we use git bash to have access to these commands

## Motivation 
Bash is how we interact with unix systems. Although most applications are not defined in bash, we use bash to set up our applications and to run them. Bash is also how we can interact with our file structure. At it's core, a program is a series of files that get run in a specific order. Bash will help us run those commands. More importantly, when we run into issues, bash will help us understand why certain issues came up. 

Command Line Interfaces (CLI) are tools we run in the command line. Although a lot of our programs will have graphic user interfaces, we can interact with all programs through text. Although initially, it may feel easier to 

## Running Applications
Use Terminal or GitBash

## Executing commands
Inside of this terminal window (or GitBash for windows) you can type any bash commands. Commands are executed line by line even if you paste multiple lines. Later we will see a way to execute an entire file.

## Command Structure
### Arguments
Commands take in arguments (some of which are optional)
```sh
man git # git is the argument for the manual command
```

### Flags
Commands take in optional flags that can augment our commands. Some flags will take arguments after them
```sh
ls -l # we are adding the '-l' flag to a list 
```

```sh
psql -d myDB -h myurl.com/mydb -U myUsername
```

The most helpful flag is `--help` as it is implemented almost universally for commands and will help explain how to use a command.

## .sh
Bash files are denoted with a `.sh` at the end which will help your editor highlight characters correctly
