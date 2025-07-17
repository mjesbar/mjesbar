/* This script detailshow classes work on JavaScript.
*/ 


// create a class 
class MyClass 
{
	//class body
}

// class with body
class MyClass2
{
	// "private" forms
	#values = new Array();
	// Constructor
	constructor(a, b)
	{
		this.#values = [a, b];
	}
	// Instance field
	myField = "foo";
	// Instance method
	myMethod()
	{
		return this.#values
	}
	// Static field
	static myStaticField = "bar";
	// Static method
	static myStaticMethod()
	{
		return this.myStaticField;
	}
	// Static block please don't use this "form"
	// static
	// {
	//    MyClass2.myStaticProperty = "foo";
	//    // Static initialization code
	// }
}

// creating a new object from class 
const sampleInstance1 = new MyClass2(3, 3);
const sampleInstance2 = new MyClass2(2, 5);
sampleInstance2.myField = 'nofoo';
console.log(sampleInstance1.myField, sampleInstance2.myField);
console.log(sampleInstance1.values, sampleInstance2.values); // #values is private
console.log(sampleInstance2.myMethod());
console.log(MyClass2.myStaticMethod());









