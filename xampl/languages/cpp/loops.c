#include<stdlib.h>
#include<stdio.h>
#include<math.h>


int main(void)	{

	for (size_t i = 0; i < 10; i++)		{		/* for loop */
		
		printf("%zu, pow: %1.2f\n", i, pow(i, 2));	

	}

	int n = 20;
	while (n < 100)	{		/* while loop run a set of statements in true assertion of certain condition */
	
		n += 20;
		printf("20 scaling: %d\n", n);

	}

	do	{		/* as same as while loop, but dowhile execute the set of statements at least once on runtime */

		n += 100;
		printf("number after do, run at least once: %d", n);

	} while (n < 200);

/* we need to avoid as long as possible, since we can make our code fall over infinite loops, which cause the program never ends
 * we must be aware the condition variables we declare have end point or break status, or else the break would point out to our 
 * entire program */


	int a;
	printf("\n'a' allocated %X, sizeof %zu", &a, sizeof a);


}
