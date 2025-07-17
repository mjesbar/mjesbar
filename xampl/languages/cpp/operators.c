#include<stdio.h>

// this file assert several logical and arithmetical expressions
// Though, various xampls prints nothing

int main(void)	{

	int a = 0, b = 0, tmp = 0;

	1 == 0;		/* evaluates 0 */
	0 == 0;		/* evaluates 1 */

	1 != 0;		/* evaluates 0 */
	0 == 0;		/* evaluates 1 */

	!(1);		/* evaluates 0 */
	!(0);		/* evaluates 1 */

	// there're others logicals like '<' '<=' '>' '>=' 
	
	1 > 2 ? printf("false") : printf("true");	/* this is called ternary operator, it's a redured alternative to if[] conditional */

	0b1100 & 0b0110;		/* results 0100 */
	0b1100 | 0b0110;		/* results 1110 */
	0b1100 ^ 0b0110;		/* results 1010 */
	~0b1100;				/* results 0011 */
	0b1100 << 2;			/* results 0000 */
	0b1100 >> 2;			/* results 0011 */

	(1) && (1);				/* results true */
	(1) && (0);				/* results false */
	(1) || (1);				/* results true */
	(1) || (0);				/* results false */

	// arithmetic operators, these doesn't need xampls
	// + addition, - substraction,  * multiplication,  / division,  % modulus
	
	tmp = a++;		/* these are increment and decrement operators */
	tmp = ++a;
	tmp = b--;
	tmp = --b;

	printf("\n%zu", sizeof(int));		// sizeof operator
	
	float number = 0.912321;
	printf("\n%f", (double)number);		/* cast operator, a float number is showed off as double */
	printf("\n%d", (int)number);		/* cast operator, a float number is showed off as an integer */

	// assignment operator
	a += b;
	a -= b;
	a *= b;
	a /= b;
	a %= b;
	a &= b;
	a |= b;
	a ^= b;
	a <<= b;
	a >>= b;

	return 0;

}
