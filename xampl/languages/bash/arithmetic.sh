#!/bin/bash

# ====================================================================================================================================================== 
# We can do math operation by using double parenthesis "(( [operation] ))", so we need to 
# open a subshell ( [subshell commands] ) and insert into it one more pair of them to open
# a "math space" to make arithmetical or algebraical operations.
# ======================================================================================================================================================  

#echo "gimme the number 1"
read -p "Enter num1: " num1			# declariing one numeric variable called num1 and assigning 4 to the variable
#echo "gimme the number 2"
read -p "Enter num2: " num2		# declaring one numeric variable called num2 and assigning 25 to store

echo $(( num1 + num2 ))		# printing the sum of both variables
echo $(( num1 - num2 ))
echo $(( num1 * num2 ))
echo $(( num1 / num2 ))
echo $(( num1 % num2 ))

echo $(expr $num1 + $num2 )		# printing arithmetical operations within a expresion () so we need to be careful to use '\' case to use * operator
echo $(expr $num1 - $num2 )		# that have other meaning when you work with regular expressions.
echo $(expr $num1 \* $num2 )
echo $(expr $num1 / $num2 )
echo $(expr $num1 % $num2 )

echo "Enter a hexadecimal number"
read Hex

echo -n "the decimal value of $Hex is : "

echo "obase=10; ibase=16; $Hex" | bc

