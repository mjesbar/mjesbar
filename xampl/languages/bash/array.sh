#! /bin/bash


car=('BWM' 'Toyota' 'Honda' 'Rover')

echo "$car : single value"		# print a single value of the array 'car'

echo "${car[@]} : all values"	# print all of the values inside of the array 'car'

echo "${car[1]} : specific value"	# print one selected value that is stored inside of array 'car'

echo "${!car[@]} : index order"	# print the index value of the array 'car'

echo "${#car[@]} : size of "	# print the total size of the array 'car'

echo "${car[@]:2:2} : <array>:s:n mode range selecting"	# print all the values after the 2 index and retrive 2 following values from the specified index 's'
# echo "$<array_name>[@]:s:n" where s is the starting index point, and n the desired amount of values that you wanna retrive from such array

echo "${car[2]} : showing off the current value of car[2]"

unset car[2]; echo "car[2] value has been dropped out"		# this command drops down the third value inside of the array 'car'

car[2]='AKT'; echo "car[2] value has been assigned as 'AKT'"	# this command assign a new value to the third index 'car[2]' of the array 'car', having dropped the value that was in the 3 place of the array 'Honda'

car+=('Mitsubizi'); echo "the array car has been appended with the value 'Mitsubizi'"	# even you can append value like this

echo "${car[2]} : showing off the value change of car[2]"

echo "${car[@]} : array's result"
