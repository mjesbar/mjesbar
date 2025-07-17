/* In this script I detail with samples the kind of collections javascript
 * offers to wrap data in a single variable
 */ 



// Objects
// Creating an object
const objectx = {}; // creates an empty object
const object2 = new Object(); // same as above
// Creating an object with properties
const object3 = {
	property1: 'value1',
	"property2": 'value2',
	2: 'value3',
	propertyN: 'valueN'
}
Object.prototype.universalKey = 'Universal Value';
object3.propertyAdded = 'new value';
// accessing an object
object3.property1; // returns 'value1'
object3["property2"]; // returns 'value2'
object3[2]; // returns 'value3'
// methods inside Objects
const myObj = {
	"key": "value",
	myMethod: function (x, y)
	{
		return x + y 
		//do something.
	},
	myGetMethod()
	{
		return this.key
		//do something.
	}
}
console.log("Object:",object3, "Universal key/value:", object3.universalKey);
console.log("Object Method Result: myMethod(1, 1) ->", myObj.myMethod(1, 1));
console.log(`Object Method Result: myGetMethod() -> ${myObj.myGetMethod()}`);


// Arrays
// Creating an array 
const array = [1, 2, 3, 4, 5];
const array2 = Array(1, 2, 3, 4, 5); // same as above
const array3 = new Array(1, 2, 3, 4, 5); // same as above
// Creating an empty array
const array4 = new Array(5); // creates an array with 5 empty slots
const array5 = []; // creates an empty array
// Creating an array with a single value
const array6 = new Array(5).fill(1); // creates an array with 5 slots with the value 1
const array7 = [1, 1, 1, 1, 1]; // same as above
// creating an array with diffrent type of values
const array8 = [1, '2', true, null, undefined, {a: 1}, [1, 2, 3]];
// creating an aray with properties
const array9 = [];
array9.propertie = 'value';
console.log("Array: ",array9); // 'propertie: value'


// Maps
// Creating a map
const mapx = new Map(); // creates an empty map
mapx.set("name1", "Miguel");
mapx.set("name2", "Yuyo");
mapx.set("name3", "Chanchito");
// accessing a map
mapx.get("name1"); // returns 'Miguel'
mapx.has("name1"); // returns true
console.log("Map: ",mapx);
// delete a map
mapx.delete("name1"); // deletes the map with the key 'name1'
mapx.clear(); // deletes all the maps


// Sets
// Creating a set
const setx = new Set(); // creates an empty set
setx.add("name1");
setx.add("name2");
setx.add("name3");
// accessing a setx
setx.has("name1"); // returns true
console.log("Set: ",setx);
// delete a setx
setx.delete("name1"); // deletes the set with the value 'name1'
setx.clear(); // deletes all the sets


