#include <stdio.h>


// Normal function
void normalFunction() {
    printf("This is a normal function.\n");
}

// CUDA host function
void cudaHostFunction() {
    printf("This is a CUDA host function.\n");
}

// CUDA kernel function
__global__ void cudaKernelFunction() {
    printf("This is a CUDA kernel function. block.x %d, block.y %d, thread.x %d thread.y %d\n",
      blockIdx.x, blockIdx.y, threadIdx.x, threadIdx.y);
}

// Common main function of C/C++
int main() {
    printf("Hello, World!\n");
    normalFunction();
    cudaHostFunction();
    cudaKernelFunction<<<10, 10>>>();
    cudaDeviceSynchronize();
    return 0;
}
