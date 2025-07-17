/*
 * In this scope of code I detail how statements works in javascript
 * and what options I have to control the flow of the program
 */



// Basic statement
{
	// code
}
// or 
{/* code */;}


// Conditional statement
if (condition) {/* code */}
else if (condition) {/* code */}
else {/* code */}


// Switch statement
switch (expression)
{
	case value1:
		// code
		// break;
	case value2:
		// code
		// break;
	default:
		// default code
}


// Error handling
// 'throw' statement can be used to raise self-intended errors
try {/* code */}
catch (error) {/* code */}
finally {/* code */}


// loop statement
for (let i = 0; i < 10; i++) {/* code */}
while (condition) {/* code */}
do {/* code */} while (condition);


// function statement
function functionName(/* parameters */) {/* code; [return value] */}
// or
const functionName = function (/* parameters */) {/* code; [return value]  */};

