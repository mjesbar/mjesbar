#!/bin/bash


count=16
age=19

if (( $count < 10 ))

# this statement could be evaluated with other brackets [ ] conditional-statement like:
# -eq	equal to,
# -gt	greater than,
# -ge	greater and equal to,
# -lt	less than,
# -le	less and equal to,
then
	echo "the count variable is less than 10"
elif (( $count > 10 ))
then
	echo "the count variable is greater than 10"

else
	echo "the condition was a complete fail! ._."
fi


echo -e ""	# print a new empty line

# let's try another xampl


if [ $age -gt 18 ] && [ $age -lt 36 ]

# if [ $age -gt 18 -a $age -lt 36 ] it's also a valid way to assert the condition

# if [ $age -gt 18 -o $age -lt 36 ] to assert an 'OR' , || condition

then
	echo "the individual has the appropriate age."
else
	echo "the individual has not the appropiate age."
fi


