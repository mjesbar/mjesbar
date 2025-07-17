#include <alloca.h>
#include<stdlib.h>
#include<stdio.h>

enum color	{RED, BLUE, GREEN};

enum errcode	{
	SUCCESS,
	NOT_FOUND,
	FAILED
};

enum 	{		/* enumerations can be typed without name */
	GAIN = 10, LOSS = 20
};

int main(void)	{

	printf("%zu", sizeof(enum color));
	printf("%d", GAIN);

	printf("errcode item %d SUCCESS", SUCCESS);
	printf("errcode item %d NOT_FOUND", NOT_FOUND);
	printf("errcode item %d FAILED", FAILED);



	return EXIT_SUCCESS;
}
