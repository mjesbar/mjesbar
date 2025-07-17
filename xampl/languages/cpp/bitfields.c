#include<stdlib.h>
#include<stdio.h>
#include<string.h>

// bitfields are used to define a variables with a custom desired size, even less than 2 bytes.


int main(void)	{

	struct bits	{	/* an structure of 2 bits */

		unsigned int bit_on		: 1;	/* 0-1 possible values */
		unsigned int bit_off	: 1;

	};

	struct	{

		unsigned int uint3: 3;		/* 0-7 possible values */

	}small;

	unsigned int value = 255 - 2;
	printf("Complete value %d : %X\n", value, value);
	small.uint3 = value;				/* trying to assign 1111 1101 to xxxx x101 three bit space */

	struct bits bit;
	bit.bit_on = value;				/* trying to assign 1111 1101 to xxxx xxx1 one bit space */

	printf("Stored value %d : %X\n", small.uint3, small.uint3);
	printf("Stored value bit %d : %X", bit.bit_on, bit.bit_on);

}
