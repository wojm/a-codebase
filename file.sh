
# Make Directory - will create a directory (folder) with a given name
mkdir tmp


# Copy - copy files from one folder to the other
# cp <files> <destination>
# <files> can be a regular expression to select multiple. The most frequent use is `<folder>/*` will get all the content of a folder
# <destination> is where to put the folder

cp 0-mkdir.sh tmp/ # copy the first file into the tmp folder

# Touch - Create an empty file with a given name
touch tmp/README.md # creates a README file in the tmp directory

# Source - we can execute the above files 
# Bash files can be ran one of two ways:

# source <filename>
# or 
# ./<filename>

# Bash files often will have a ["Sha-Bang"](https://www.tldp.org/LDP/abs/html/sha-bang.html) that says what definition of bash we want to use

source 1-echo.sh
