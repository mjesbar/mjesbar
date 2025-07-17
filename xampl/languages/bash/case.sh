#! /bin/bash

select car in BMW MERCEDES TESLA ROVER TOYOTA
do

	case $car in
		BMW)
			echo "BMW selected";;
		MERCEDES)
			echo "MERCEDES selected";;
		TESLA)
			echo "TESLA selected";;
		ROVER)
			echo "ROVER selected";;
		TOYOTA)
			echo "TOYOTA selected";;
		*)
			echo "error.";;
	esac
done


