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
__global__ void cudaKernelFunction(int* a) {
    printf("This is a CUDA kernel function. block.x %d, thread.x %d\n", blockIdx.x, threadIdx.x);
    *a = 42;
}

// Common main function of C/C++
int main() {
    int* d_a = nullptr;
    int a = 0;
    int* h_a = &a;
    cudaMalloc((void**)&d_a, sizeof(int));

    printf("Hello, World!\n");
    normalFunction();
    cudaHostFunction();
    cudaKernelFunction<<<2, 10>>>(d_a);
    cudaDeviceSynchronize();
    cudaMemcpy(h_a, d_a, sizeof(int), cudaMemcpyDeviceToHost);
    printf("Kernel execution completed. a: %d\n", *h_a);

    cudaFree(d_a);
    return 0;
}
