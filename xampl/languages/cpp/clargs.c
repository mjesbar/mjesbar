#include<stdlib.h>
#include<stdio.h>

/* we can pass some arguments during runtime invoking the excutable file and giving a few of values as std input
 * to process them inside the program, as shell-like: xampl:	mv ./clargs ../bash/cfolder/ 
 *
 * mv command receive 2 arguments from the shell to process them, these arguments can also be stored by a c program 
 * to handle and do whatever tasks making use of them. The args are stored in argc, whose save the total argument count.
 * And *argv[] whose save the values of each argument, all of the args can be string or numbers.
 *
 * Inside a program we can access to every argument easely by a for loop and  iterating the argv[] til argc reach the
 * total value */


int main(int argc, char *argv[])	{

	for (int i = 0 ; i < argc ; i++)	{

		printf("Argument %d is : %s\n", i, argv[i]);

	}
}


