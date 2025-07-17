#include <stdlib.h>
#include <stdio.h>
#include <errno.h>


struct stc	{
	size_t foo;
	int top;
};

struct header {
	int foo;
	char ch;
};

struct header2	{
	struct header hdr;
	int flex[];
};

struct header3	{
	int foo;
	char ch;
	int flex[];	// raise an error due to array members in struct never are found so that you won't be able to initilize them. 
};

struct header4	{
	size_t foo;
	char ch;
	int flex[1]; // valid*
};

int main(void)	{
	
	struct header hed;
	printf("struct header:%zu, foo:%zu, ch:%zu\n",	/* struct occupies 8 bytes along for as minimum */
			sizeof(hed),
			sizeof(hed.foo),
			sizeof(hed.ch));


	//struct header2 hed2 = { {8, 'a'}, {3}}; /* error we cannot initialize the flex array member */
	struct header2 hed2 = { {8, 'a'} }; /* error we cannot initialize the flex array member */
	printf("hed2 attributes: header_foo=%d, header_ch=%c.\nFlex was not assigned\n", hed2.hdr.foo, hed2.hdr.ch);


	struct header4 hed4;
	printf("struct header4:%d, foo:%zu, ch:%zu, flex:%zu\n",	/* struct occupies 8 bytes along for as minimum */
			(int)sizeof(struct header4),
			sizeof(hed4.foo),
			sizeof(hed4.ch),
			sizeof(hed4.flex));


	struct stc *struct_ptr = malloc(sizeof *struct_ptr);	/* initializing an struct pointer, use -> symbol to access members */
	struct_ptr->foo = sizeof(struct stc);
	struct_ptr->top = 10;
	printf("struct pointer size:%zu, attribute top:%d", struct_ptr->foo, struct_ptr->top);


}


