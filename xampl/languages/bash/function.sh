#! /bin/bash

function printo(){
	echo "args: $1, $2, $3"
	return_value="original string"
	echo $return_value
}

printo a b c

return_value="change 1!"
echo $return_value

return_value="change 2!"
echo $return_value


