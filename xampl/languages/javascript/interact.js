/*
 * Here I learn how to interact with a button on the page
 */

let count = 0;
let countElement = document.getElementById('counter');
let buttonElement = document.getElementById('click-bait');
let parragraphElement = document.getElementById('text-counter');

function buttonIncrement()
{
	count++;
	console.log('buttonIncrement function has been called...');
	console.log(`${count} times clicked`);
	// console.log(count+' times clicked');
	
	countElement.textContent = parseInt(count);
	buttonElement.textContent = 'BUTTON CLICKED !!!';
	parragraphElement.textContent += count + ' - ';
}



