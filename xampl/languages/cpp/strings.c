#include<stdio.h>
#include<string.h>
#include<stdlib.h>
#include<math.h>

int main(int argc, char * argv[])	{

	
	
	char letter = 'a';											/* only a single character, we use single quotes '<char>' */
	char phrase[] = "this is the first sentence";				/* modifiable */
	char phrase2[40] = "this is a fixed size sentence";			/* mofidiable without exceed the size limit */
	const char* phrase_ptr = "this is a pointer oriented sentence";	/* not modifiable, but can receive a new pointer, use const it's a good practice */
	
	// getting copy strings
	char tence1[] = "abcde ";
	char tence_to_copy[sizeof(tence1)];
	strcpy(tence_to_copy, tence1);		/* this copy the 'tence1' to 'tence_to_copy' */

	printf("\n%s", tence_to_copy);
	
	// getting the len of strings
	size_t len_of_strings = strlen(tence_to_copy);
	printf("\nstring len with 'strlen' built-in function : %zu", len_of_strings);	/* strlen often is enough, but when special or extended character
																					   set ut8 is used doesn't work as you expected. In those cases we
																					   simplly use 'sizeof' */

	printf("\nstring len with \'sizeof\' operator/function : %zu", sizeof(tence_to_copy) - 1); /* we need substract 1 due to '\0' is read by 'sizeof()' */

	// strings also may be treated like an arrays 
	printf("\n%c", tence_to_copy[1]);		/* this will prints 'c' */

	char * string_array_ptr[] = {"hola", "mundo", "brou"};		/* can not modify this */
	char string_array_ease[][10] = {"hello", "world", "dude"};	/* now you can modify it */
	printf("\nsize: %zu, for the string item: init|%s|end", sizeof(string_array_ease[1]), string_array_ease[1]);
																   
	// you can also cast some strings and chars to numerical values, integers, floats adn doubles
	char number_one[] = "10";
	int string_atoi = atoi(number_one);
	int string_strtol = strtol(number_one, NULL, 10);
	printf("\nthe string converted from %%s to %%d results : %d", string_atoi);
	printf("\nthe string converted from %%s to %%d results : %d", string_strtol);

}
