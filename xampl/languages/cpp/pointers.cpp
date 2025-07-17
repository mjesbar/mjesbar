#include <iostream>
#include <iomanip>
#include <cstdlib>
#include <sstream>


int function_modifier(int arg) {
    arg+=20;
    return arg;
}

int function_modifier_ref(int& arg) {
    arg+=20;
    return arg;
}


auto main() -> int {
    
    double value = 1996.9229123721931237219388;
    double* ptr = &value;
    double& ref = value;
    
    std::cout<<"value   : "<<std::setprecision(10)<<value<<std::endl;
    std::cout<<"&value  : "<<std::setprecision(10)<<&value<<std::endl;
    std::cout<<"ptr     : "<<std::setprecision(10)<<ptr<<std::endl;
    std::cout<<"*ptr    : "<<std::setprecision(10)<<*ptr<<std::endl;
    std::cout<<"ref     : "<<std::setprecision(10)<<ref<<std::endl;
    std::cout<<"&ref    : "<<std::setprecision(10)<<&ref<<std::endl;

    int number = 20;    // if one passes a ref to a function, the variable is also altered by &number
    
    std::cout<<std::endl;
    std::cout<<"Number Original             : number = "<< number <<std::endl;

    function_modifier(number);
    std::cout<<"Number after normal func    : number = "<< number <<std::endl;

    function_modifier_ref(number);
    std::cout<<"Number after ref func       : number = "<< number <<std::endl;


    return 0;
}

