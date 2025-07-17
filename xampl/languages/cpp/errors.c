#include<stdlib.h>
#include<stdio.h>
#include<string.h>
#include<errno.h>


int main(int argc, char* argv[]) {

	FILE *file;
	int last_error = 0;

	if ((file = fopen(argv[1], "w")) == NULL) {
		last_error = errno;
		perror("you had to provide atleast one parameter to the program\nStupid!");
		return EXIT_FAILURE;
		/* reset errno and continue */
		errno = 0;
	}

	printf("%d", last_error);
	fclose(file);

	FILE *errlog;
	errlog = fopen("errlog", "w");
	fprintf(errlog, "fopen: The operation with %s has an error %s", argv[1], strerror(last_error));
	fclose(errlog);

	return EXIT_SUCCESS;
}

