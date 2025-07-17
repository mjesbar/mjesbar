#include<stdio.h>
#include<stdlib.h>


int main(int argc, char *argv[])	{

	int e = EXIT_SUCCESS;

	// open a file from the current directory ., and store it into a pointer
	// r : read
	// w : write
	// w+ | r+ : read and write privileges
	// a : append, write just before EOF
	FILE *file = fopen("edited.txt", "w+");
	
	// print an error if the file opening was failed
	if (file == NULL)	{
		perror("file not opened");
		return EXIT_FAILURE;
	}

	// write text to file. Unlike puts(), fputs() does not add a new line
	fputs("this is the message\n", file);		/* the 4 lines following write to file twice times
												   first directly without catching possibly error raising
												   second confirms f the funtion fputs raise EOF or non-negative number,
												   which means there was not errors at all */
	fprintf(file, "\n...\nEnd\n");


	if (fputs("this is the message\n", file) == EOF)	{		/* we can check directly for error in runtime to
																   raise the appropriate error */
		perror("error trying to put message to file");
		e = EXIT_FAILURE;
	}
	
	printf("position in file before: %i\n", (int)ftell(file));		/* ftell, fseek, fgetpos are alternative to know
																	   the cursor position in file */
	rewind(file);		/* rewind set the file position to the begining. So below does read and print the content written to file */
	printf("position in file after: %i\n", (int)ftell(file));

	int c;
	while ((c = fgetc(file)) != EOF)	{
		putchar(c);		/* fputs, fputc. fwrite, fprintf are alternatives to write to file.
						   also fscanf, fread, fgets, fgetc are other ways to read the file. */
		fpos_t pos;
		fgetpos(file, &pos);
        //printf("%d", pos);
	}

	// close the file
	if (fclose(file))	{
		perror("error trying to close file");
		return EXIT_FAILURE;
	}

	return e;

}
