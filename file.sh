
echo "This file execute "

# List - will list the content for the given directory
ls # This is useful for showing the existance of a file

# we can reference other folders with out ls command by passing it in as the optional argument
ls ../

# there are also flags that can augment our command

ls -a # list all the files, including those starting with a '.'
ls -l # shows a long form of the content, useful for seeing access permissions


# Path Working Directory - this will tell us where we are on our operating system

# A directory is a folder
# pwd shows the path (from root) to the current directory you are in
# It is useful for figuring out where you are

pwd

# Change Directory
# cd command will help navigate between directories
# we can use a relative path or an absolute path

cd ./  # will change to our current working directory, aka does nothing

cd ../ # go to the parent directory

cd ./1-navigation # this will go back into this directory

# the below commands will change to your root directory
# cd ~
# cd

