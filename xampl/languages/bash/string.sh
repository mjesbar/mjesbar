#! /bin/bash

echo "insert the first line"
read line1

echo "..."
sleep 1

echo "insert the second line"
read line2

if [ $line1 == $line2 ]
then

	echo "strings match since both strings are equal"

else

	echo -n "strings don't match"

	# the following scope compare the string at bit-level.
	if [ $line1 \> $line2 ]
	then
		echo " since $line1 is longer than $line2"
	elif [ $line1 \< $line2 ]
	then
		echo " since $line1 is smaller than $line2"
	fi


fi

concatenate=$line1$line2	# We can concatenate the string obstained by read as appears previously

echo -e "\nfinally the both strings concatenated result for $concatenate"		# this print the 'concatenate' variable in original stored case
echo -e "\nfinally the both strings concatenated result for ${concatenate^}"	# this print the 'concatenate' variable as Capitalize
echo -e "\nfinally the both strings concatenated result for ${concatenate^^}"	# this print the 'concatenate' variable in uppercase
