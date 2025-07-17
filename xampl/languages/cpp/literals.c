#include<stdio.h>
#include<stdlib.h>


int main(void)
{
	// integer literals	
	int d = 5;		/* decimal suffix */
	int e = 05;		/* octal suffix */
	int x = 0x12AF;	/* hexadecimal suffix */
	long int a = 10l;			/* long suffix */
	long long int b = 10ll;		/* long long suffix */
	unsigned int c = 10u;		/* unsigned suffix */

	// floating point
	double f = 3.1416e-10;		/* exponential shifting */
	float g = 3.1415f;			/* float suffix */
	long double lodo = 3.14156l;		/* long double suffix */

	// strings literals
	char h = 'b';			/* simple char */
	wchar_t i = L"wide";	/*  platform dependent */
	char j = u8"UTF-8";		/* UTF-8 character set */
	char16_t k = u"UTF-16";
	char32_t l = U"UTF-32";
}
