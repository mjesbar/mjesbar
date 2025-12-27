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
    printf("This is a CUDA kernel function. block.x %d, block.y %d, thread.x %d, thread.y %d\n", blockIdx.x, blockIdx.y, threadIdx.x, threadIdx.y);
    atomicAdd(a, 1);
}

// Common main function of C/C++
int main() {
    int* d_a = nullptr;
    int a = 89;
    cudaMalloc((void**)&d_a, sizeof(int));
    cudaMemcpy(d_a, &a, sizeof(int), cudaMemcpyHostToDevice);


    printf("Hello, World!\n");
    normalFunction();
    cudaHostFunction();
    dim3 grid_size(3,3);
    dim3 block_size(3,3);
    cudaKernelFunction<<<grid_size, block_size>>>(d_a);
    cudaDeviceSynchronize();
    cudaMemcpy(&a, d_a, sizeof(int), cudaMemcpyDeviceToHost);
    printf("Kernel execution completed. a: %d\n", a);

    cudaFree(d_a);
    return 0;
}
