#! /bin/bash

number=1

# while loop statement =====================================================

while [ $number -lt 20 ]
do
	echo -ne "As part of while loop, it's executed the $number iteration'\r"
	number=$(( number + 1 ))
	sleep 0.2
done

# until loop statement =====================================================

until [ $number -gt 25 ]
do

	echo -ne "As part of until loop, it's executed the $number iteration'\r"
	number=$(( number + 1 ))
	sleep 0.5

done

echo ""

# for loop statement =======================================================

for i in {0..20..1}		# this is structured and parsed as {start..ending ..increment}
do
	echo $i
	sleep 0.1
done

# another way to use a for loop

for ((i=0; i<10; i++))
do
	echo $i
	sleep 0.4
done

# IMPORTANT ! ==============================================================
# 'break' statement can be used for stop the loop in its execution
# 'continue' statement can be used for stop the current iteration and execute the next loop step
# ==========================================================================


