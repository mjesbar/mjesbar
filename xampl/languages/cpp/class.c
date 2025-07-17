#include<stdlib.h>
#include<stdio.h>


// prototypes
float area(float r);

// defining struct class
typedef struct
{
	float radio;
	float (*area)(float);
	// area = area; / we cannot assign the area function address to the area pointer due to struct in C
	// don't support neither functions nor funtions assignments
} Ball;

// Class constructor
// we can also declare this constructor as a pointer '*BallClass()' and keep in mind that we'll need to
// use '->' operator to access to members
Ball BallClass(float build_radio)
{
    Ball instance;
    // or 'instance,a   bol also works
	instance.area = &area;  // now area function pointer is 'pointing' to the area external function
    instance.radio = build_radio;

	return instance;
}

// function definitions
float area(float r)
{
	return r * r;
}


// main execution scope
int main(void)
{    
	Ball ball_object = BallClass(0);
    Ball ball_copy = BallClass(0);
	ball_object.radio = 10.4567;
    ball_copy.radio = 25000;
    
    printf("radio: %lf, area: %lf\n",
            ball_object.radio,
            ball_object.area(ball_object.radio));
    
    printf("radio: %lf, area: %lf\n",
            ball_copy.radio,
            ball_copy.area(ball_copy.radio));
        
    printf("\nreal area function address  :   %p\nclass area function address :   %p",
                area, ball_copy.area);

    return 0;
}
