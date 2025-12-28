#include <stdio.h>

typedef struct {
  int x;
  int y;
} Point;

void printPoint(Point p) {
  printf("Point: (%d, %d)\n", p.x, p.y);
}

int main() {
  printf("Hello, World!\n");
  printf("Printing a autocasted Point\n");
  printPoint( (Point){ .x = 1, .y = 9 } );
  return 0;
}
