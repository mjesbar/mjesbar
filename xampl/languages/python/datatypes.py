import os

import numpy

HOLA = 25


# most common types
integer = 9
floating_point = 9.21321
boolean = True
boolean2 = False
str1 = 'this is a single string'
str2 = "this is another string"


# collection types

#lists or Sequences
ls = [10,20,230]
ls2 = ['a', 20, "this is a multivariable list"]

#sets
lsx = [10,10,10,20,20,20]
stx = set(lsx)

#tuples
tp = (10,20,30)
#tp[1] = 5      Runtime error, tuples are inmutables

#dictionaries
dic1 = {
        'name': 'Miguel',
        'surname': 'Bello'
        }

dict2 = {
        'A': 10,
        'B':256,
        'C':300
        }

# numpy arrays extern modules
na = numpy.array([10,20,15])
print(f"Numpy array\n{na}")

print("strings\n"+str(str1)+"\n"+str(str2))

print("\nlists:")
for i in range(len(ls)):
    print(f"{ls[i]} ", end="")
print()
for i in range(len(ls2)):
    print(f"{ls2[i]} ", end="")

print()
print("\nTuples:")
for t in range(len(tp)):
    print(f"{tp[t]} ", end="")

print("\n")
print("Dictionaries:")
for key in dic1.keys():
    print(f"{dic1[key]} ", end="")
print()
for key in dict2.keys():
    print(f"{dict2[key]} ", end="")





