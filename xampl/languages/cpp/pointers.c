#include<stdlib.h>
#include<stdio.h>
#include<stddef.h>


int main(void)		{

	float value = 23.12;
	float *pointer = &value;		/* this assignment store the memory location of the variable 'value' */
	printf("*pointer        : %f\n", *pointer);
	printf("(void*)pointer  : %p\n", (void*)pointer);
	printf("&value          : %p\n", &value);
	printf("&pointer        : %p\n", &pointer);		/* the pointer address is different to the value address due to
																		   they are not the same thing, the value is an integer value
																		   stored at somewhere on memory, and the pointer is another variable
																		   who store the place of memory the variable value is stored in.
																		   they cannot indeed occupy the same location on memory, the pointer
																		   is just beside of the value var, chasing it all the time, so that
																		   the pointer in itself is shifted a few bytes next to the value
																		   address allocation. */
    

	size_t pd = &value - (float*) &pointer;
    printf("\n");
	printf("Pointer shifting:\npointer: %p\n&value: %p, diff: %zu bytes", &pointer, &value, pd);

    printf("\n");
    printf("\nSize of pointer : %zu\nSize of value   : %zu",
            sizeof(pointer), sizeof(value));

}




