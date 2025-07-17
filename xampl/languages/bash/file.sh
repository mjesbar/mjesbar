#! /bin/bash

mkdir -p ./directory_created

echo "Enter directory name to check"

read direct

if [ -d "$direct" ]		# you could also check files with the preffix -f before the "$variable"
then

	echo "$direct exists!"

else

	echo "$direct doesn't exist!"

fi



