#include <cstddef>
#include <iostream>
#include <array>

using namespace std;


auto main() -> int {
    
    int column_size = 3;
    int index_size = 3;
    int mat[3][3] = 
    {
        {1,2,3},
        {4,5,6},
        {7,8,9}
    };

    for (int i = 0; i < index_size; i++) {
        for (int c = 0; c < column_size; c++) {
            cout << "Mat["<< i << "] [" << c << "] :" << mat[i][c] << ' ';
        }
        cout << endl;
    }
    
    cout << endl;

    for (size_t index = 0; index < sizeof(mat[0])/sizeof(int); ++index) {
        for (int &value : mat[index]) {
            cout << value  << ' ';
        }
        cout << endl;
    }


    return 0;
}

