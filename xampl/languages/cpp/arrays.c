#include<stdio.h>
#include<stdlib.h>

#define ARR_LEN 1000


int main(void)	{

	int array[10];		/* declaring an empty array with space to 10 integers */
	int array2[10] = {0};	/* decaring an zero filled array of 10 integers in this case, all zeroes */
	int array3[10] = {1, 2, 3};	 /* declaring 3 item for the array3 whose can add 7 more values */
	int array4[10] = {[2]=5, [5]=15};	/* we can explicit tell to the array the position that we want the number will occupy into the array */

	int arr[] = {1,2,3,5};		/* declaring an auto sized array */
	int arr2[] = {[0]=3, [6]=4};	/* size of 7 */

	size_t size = sizeof(arr);		/* this store the size of the arr in bytes */
	size_t lenght = sizeof(arr) / sizeof(arr[0]);	/* the item amount of arr */

	int a[ARR_LEN];
	a[500] = 56;		/* we can assign values to an array latter than inicialized it */
	printf("Element %d : %d\n", 500, a[500]);

	int b[3][2] = {
		{3,4},
		{56,78},
		{16,7}
	};

	int c[3][2] = {3,4,56,78,16,7};		/* both ways are available to inicialize an array multidimensional */

	// accessing to each Element
	size_t i, j;
	for (i=0; i<3; i++)	{
		for (j=0; j<2; j++)	{
			printf("[%d][%d] : %d\n", i, j, c[i][j]);
		}
	}

	c[0][0] = 1080;		/* 3 is changed by 1080 */
	*(*(c+1)+1) = 70;	/* 78 is changed by 70 */ 
	printf("c[0][0] -> %d\n*(*(c+1)+1) -> %d\n", c[0][0], *(*(c+1)+1));

	// accessing to each Element again
	for (i=0; i<3; i++)	{
		for (j=0; j<2; j++)	{
			printf("[%d][%d] : %d\n", i, j, c[i][j]);
		}
	}

	// this is wierd but valid
	1[c[0]] = 10;
	// accessing to each Element again
	for (i=0; i<3; i++)	{
		for (j=0; j<2; j++)	{
			printf("[%d][%d] : %d\n", i, j, c[i][j]);
		}
	}

	int *ptr = NULL;		/* we can even access arrays by pointers, locating the address of the
							   array and assigning the value to such pointer */
	ptr = &c;
	//ptr = (*(c+2)+1);
	printf("\nptr to c is : %X, %d", ptr, *ptr);
	return 0;
}
