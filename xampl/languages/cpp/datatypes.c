#include<stdio.h>
#include<limits.h>	/* this contains the limits of the whole variables types */
#include<stdint.h>
#include<stdbool.h>


/*	this is the definitions of the several options that we have to
 *	define our variables in any cases of use. 
 *
 *	Also we touch afterwards some concepts like pointers and functions.
 */

int newLine(int n);

int a = 0;			/* simpliest declaration. */
int b, z, *ptr;		/* such as this way we can declare various variables. */



/*	fixed variables	*/

uint32_t u32 = 32;	/* exactly 32-bits wide	*/
uint8_t u8 = 255;	/* exactly 8-bits wide	*/
int64_t i64 = -65;	/* exactly 64 bit in two's complement representation as whole number as both positive and negative */



/*	integer variable types */

signed char c = 127;
signed short int si = 32767;
signed int i = 32767;
signed long int li = 2147483647;
signed long long int lli = 2147483647;	/*	deprecated since C99 */

unsigned int ui = 65535;
unsigned short us = 32767;
unsigned char uc = 255;

int d = 42;		/* decimal case */
int o = 042;	/* octal case */
int x = 0xAF;	/* hexadecimal case */
int X = 0xAF;	/* A to F represents 10 - 15 values */



/* floating point variable types */

float f = 0.314f;	/* suffix f or F denotes type float */
double dd = 0.314;	/* no suffix denotes double */
long double ldd = 0.3141; /* suffix l or L denotes long double */

double xx = .1;	/* valid, fractional part is optional */
double yy = 1.;	/* valid, whole-number part is optional */

double sn = 1.23e3;	/* decimal fraction 1.23 is scaled by 10^3, that is 1230.0 */



/* Strings literals - these are not modifiables is a good practice declare them as 'const' types'*/

char* str = "hello world";	/* string literal */


char a1[] = "abc";	/* a1 is a char[4] holding {'a','b','c','\0'} */
char a2[4] = "abc";	/* same as a1 */
char a3[3] = "abc";	/* a3 is a char[3] holding {'a','b','c'}, missin the '\0' */

char* s = "foobar";
//s[0] = 'F';		/* undefined behaviour */

char const* s1 = "foobar";
//s1[0] = 'F';	/* compiler error */

char emm = 'B';

char* ct = "Hello" ", " "World";	/* since c99, more than two wide-strings can be contatenated */

int main(void)	{
	printf("hello world... : %s, %s", ct, (1==1 ? "True" : "False"));
	return 0;	// the basic program definition.
}





