#include<stdio.h>
#include<stdbool.h>

#define bool int
#define true 1
#define false 0

int main(void)	{
	
	_Bool x = 1;	/* C99 version built-in */
	_Bool y = 0;	/* C99 version built-in */

	bool b = true;		/* equivalent to bool b = 1; */
	bool n = false;		/* equivalent to bool n = 0; */

	if (b)	{
	
		puts("this will print!");

	}
	
	if (!n)	{

		puts("this will also print!");

	}



}
