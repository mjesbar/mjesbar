#! /bin/bash

echo	"press any key to continue"

while [ true ]
do

	read -t 3 -d , -N 10

	if [ $? -eq 0 ]
	then

		echo	"you have terminated the script"
		exit

	else

		echo	"waiting for you to press the key idiot!"

	fi

done


