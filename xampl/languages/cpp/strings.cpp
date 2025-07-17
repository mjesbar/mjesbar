#include <fstream>
#include <ios>
#include <iterator>
#include <string>
#include <iostream>
#include <stdio.h>
#include <cstdio>
#include <cstdlib>
#include <cstring>

auto main() ->int {

    std::string str_a = "Hola";
    std::string str_b = "mundo";

    std::cout<<str_a + " " + str_b <<std::endl;

    str_a = "Cpp is going to";
    str_b = "Rigor mortis x_x";

    std::cout<<str_a + " " + str_b <<std::endl;

    // C style strings
    char char_a[] = "Osa";  // fixed char array like
    char* char_b = "moda";  // pointer like

    char char_end[20];
    strcat(char_end, char_a);
    strcat(char_end, char_b);
    //char char_c[] = char_a + char_b;
    //catastrophic error, char type cannot bo concatenated by unary operands
    printf("printf concat = %s%s\nstrcat C stdio function = %s",
            char_a, char_b, char_end);
    

    return 0;
}


