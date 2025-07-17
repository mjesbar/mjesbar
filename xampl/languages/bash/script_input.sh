#! /bin/bash

echo $1 $2 $0
# this point out the order of the arguments that could be passed beside the sh execution.
# So, the '$1' argument will be printed first and '$2' argument will be printed as second.
# '$0' point to the self sh file that is being executing.

args=("$@")	# this get all the arguments passed to the sh file execution and store it into an array called 'args'

echo ${args[0]} ${args[1]} ${args[2]}	# here we access to every item of the 'args' array
echo $@									# this is the same of above
echo $#									# this statement returns the amount of arguments passed to the sh execution



