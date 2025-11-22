package main

import (
	"fmt"
	"strings"
	"time"
)

// Variables
const constant = 40

var bytec byte = 0x23
var variable string = "hello"
var boolean bool = false
var uint8bits uint8 = 255
var uint64bits uint64 = 9213125243543
var float32bits float32 = .9
var float64bits float64 = .9213125243543

// Arrays
var array []string = []string{"hola", "como", "estas"}

// Slices
var slice []int = make([]int, 5)

// Structs
type Vector struct {
	x float32
	y float32
}

var vector Vector = Vector{0.23, 0.5324}

// Short assignment :=
// Functions
func shortv() []string {
	i, j := "Short", "with ... parameters"
	return []string{i, j}
}

// Classes?
type MyClass struct {
	m1 int
	m2 string
	m3 bool
}

var instance MyClass = MyClass{1, "alo", true}

func (self MyClass) MyClassMethod(n int) int {
	self.m1 = 4 * n
	return self.m1
}

// Interfaces
type Looker interface {
	Look() bool
}

type Person struct {
	Name string
}

type Extraterrestrial struct {
	Name string
}

func (p Person) Look() bool {
	return true
}

func (p Extraterrestrial) Look() bool {
	return false
}

type Number interface{ ~int32 | ~float32 }

func SumNumbers[N Number](n1 N, n2 N) N {
	return n1 + n2
}

// Go routines
func routine1() {
	time.Sleep(1 * time.Second)
	fmt.Println("End of the routine 1")
}

func routine2() {
	time.Sleep(2 * time.Second)
	fmt.Println("End of the routine 2")
}

func routine3(c chan int) {
	time.Sleep(3 * time.Second)
	c <- 1
}

// Outputs
func Af() {
	fmt.Println("Exported function from a.go")
	fmt.Println("Byte:", bytec)
	fmt.Println("Constant:", constant)
	fmt.Println("Variable:", variable)
	fmt.Println("Boolean:", boolean)
	fmt.Println("UInt8:", uint8bits)
	fmt.Println("UInt64:", uint64bits)
	fmt.Println("Float32:", float32bits)
	fmt.Println("Float64:", float64bits)
	fmt.Println("Array:", array)
	slice = []int{1, 2, 3, 4, 5}
	fmt.Println("Slice1:", slice)
	slice = []int{0, 2, 0, 4, 0, 6}
	fmt.Println("Slice2:", slice)
	fmt.Println("Struct:", vector)
	s := shortv()
	fmt.Println("Hello", strings.Join(s, " "))
	fmt.Println("MyClass", instance.m1, instance.m2, instance.m3)
	fmt.Println("MyClass", instance.MyClassMethod(15))
	var varassert interface{} = []string{"a", "b", "c"}
	fmt.Println("MyClass", varassert.([]int))

	go routine1()
	go routine2()
	time.Sleep(3 * time.Second)
	fmt.Println("End of all Go routines")

	c := make(chan int)
	go routine3(c)
	fmt.Println("ZzZzZz waiting for routine3()...")
	<-c
	fmt.Println("End of the routine 3 (waited channel)")

	var l, e Looker
	l = Person{Name: "Heissenberg"}
	e = Extraterrestrial{Name: "Jimmy"}
	fmt.Println("Looking?:", l.Look())
	fmt.Println("Looking?:", e.Look())
	// fmt.Println("Flying?:", l.Fly()) // Looker interface doesn't have the 'Fly()' method signature

	var in int32 = 23
	var fn float32 = 3.23
	fmt.Println("SumInts:", SumNumbers(in, in))
	fmt.Println("SumInts:", SumNumbers(fn, fn))

	channel := make(chan int, 2)
	channel <- 0
	channel <- 1
	fmt.Println("Initial Channel Value:", <-channel) // 0
	channel <- 999
	fmt.Println("Mid Channel Value:", <-channel) // 1
	fmt.Println("End Channel Value:", <-channel) // 999

}
