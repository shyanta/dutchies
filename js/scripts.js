// Wrap code in an IIFE
(function(){
	// Declare all global variables
	// Global variables for the formula's to calculate
	// Currency euro to dollar and back
	var euroFormula = 1.0932;
	var dollarFormula = 0.9148;
	// Formula kilometers to miles and back
	var distanceFormula = 1.609344;

	// Save document elements in variables
	// Mobile navigation section
	var mobileNav = document.getElementById('mobile-nav');
	// Euro to dollar variables
	var formEuro = document.getElementById('euro');
	var euroInput = document.getElementById('euro-val');
	var dollarOutput = document.getElementById('dollar-output');
	// Dollar to euro variables
	var formDollar = document.getElementById('dollar');
	var dollarInput = document.getElementById('dollar-val');
	var euroOutput = document.getElementById('euro-output');
	// Celsius to farenheit variables
	var formCelsius = document.getElementById('celsius');
	var celsiusInput = document.getElementById('celsius-val');
	var farenheitOutput = document.getElementById('farenheit-output');
	// Farenheit to celsius variables
	var formFarenheit = document.getElementById('farenheit');
	var farenheitInput = document.getElementById('farenheit-val');
	var celsiusOutput = document.getElementById('celsius-output');
	// Kilometers to miles variables
	var formKilometer = document.getElementById('kilometer');
	var kilometerInput = document.getElementById('kilometer-val');
	var milesOutput = document.getElementById('miles-output');
	//  Miles to kilometers variables
	var formMiles = document.getElementById('miles');
	var milesInput = document.getElementById('miles-val');
	var kilometerOutput = document.getElementById('kilometer-output');

	// Give formActions to the forms
	formEuro.addEventListener('submit', euroToDollar);
	formDollar.addEventListener('submit', dollarToEuro);
	formCelsius.addEventListener('submit', celsiusToFarenheit);
	formFarenheit.addEventListener('submit', farenheitToCelsius);
	formKilometer.addEventListener('submit', kilometerToMiles);
	formMiles.addEventListener('submit', milesToKilometer);

	// Write functions to calculate the answers
	// Euro to dollar function, called on the form submit
	function euroToDollar(){
		event.preventDefault();
		// Get the value from the input field
		var euroInputVal = euroInput.value;
		// Calculate the outcome with the needed formula
		var dollarOutputVal = euroInputVal * euroFormula;
		// Set the output value to a maximum of 2 decimals
		dollarOutputVal = Math.round(dollarOutputVal * 100) / 100;
		// Print the output value in the page for the user
		dollarOutput.innerHTML = '$ ' + dollarOutputVal;
	}
	// Dollar to euro function, called on the form submit
	function dollarToEuro(){
		// Prevent the page from reloading when the form is submitted
		event.preventDefault();
		// Get the value from the input field
		var dollarInputVal = dollarInput.value;
		// Calculate the outcome with the needed formula
		var euroOutputVal = dollarInputVal * dollarFormula;
		// Set the output value to a maximum of 2 decimals
		euroOutputVal = Math.round(euroOutputVal * 100) / 100;
		// Print the output value in the page for the user
		euroOutput.innerHTML = '€' + euroOutputVal;
	}
	// Celsius to Farenheit function, called on the form submit
	function celsiusToFarenheit(){
		// Prevent the page from reloading when the form is submitted
		event.preventDefault();
		// Get the value from the input field
		var celsiusInputVal = celsiusInput.value;
		// Calculate the outcome with the needed formula
		var farenheitOutputVal = (celsiusInputVal * 1.8) + 32;
		// Set the output value to a maximum of 2 decimals
		farenheitOutputVal = Math.round(farenheitOutputVal * 100) / 100;
		// Print the output value in the page for the user
		farenheitOutput.innerHTML = farenheitOutputVal + ' °F';
	}
	// Farenheit to celsius function, called on the form submit
	function farenheitToCelsius(){
		// Prevent the page from reloading when the form is submitted
		event.preventDefault();
		// Get the value from the input field
		var farenheitInputVal = farenheitInput.value;
		// Calculate the outcome with the needed formula
		var celsiusOutputVal = (farenheitInputVal - 32) / 1.8;
		// Set the output value to a maximum of 2 decimals
		celsiusOutputVal = Math.round(celsiusOutputVal * 100) / 100;
		// Print the output value in the page for the user
		celsiusOutput.innerHTML = celsiusOutputVal + ' °C';
	}
	// Kilometer to miles function, called on the form submit
	function kilometerToMiles(){
		// Prevent the page from reloading when the form is submitted
		event.preventDefault();
		// Get the value from the input field
		var kilometerInputVal = kilometerInput.value;
		// Calculate the outcome with the needed formula
		var milesOutputVal = kilometerInputVal / distanceFormula;
		// Set the output value to a maximum of 2 decimals
		milesOutputVal = Math.round(milesOutputVal * 100) / 100;
		// Print the output value in the page for the user
		milesOutput.innerHTML = milesOutputVal + 'mi';
	}
	// Kilometer to miles function, called on the form submit
	function milesToKilometer(){
		// Prevent the page from reloading when the form is submitted
		event.preventDefault();
		// Get the value from the input field
		var milesInputVal = milesInput.value;
		// Calculate the outcome with the needed formula
		var kilometerOutputVal = milesInputVal * distanceFormula;
		// Set the output value to a maximum of 2 decimals
		kilometerOutputVal = Math.round(kilometerOutputVal * 100) / 100;
		// Print the output value in the page for the user
		kilometerOutput.innerHTML = kilometerOutputVal + 'km';
	}

	// Mobile Navigation scripts
	// Set mobile nav to hidden
	mobileNav.setAttribute('class', 'hide');
	// Use more ways to save innerwidth to make it work in older browsers
	var width = window.innerWidth
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;
	var height = window.innerHeight
	|| document.documentElement.clientHeight
	|| document.body.clientHeight;

	// activate mobile nav at 768px width
	if (width <= 768){
		// Set mobile nav to visible
		mobileNav.removeAttribute('class', 'hide');
		// Select all navbuttons to navigate with
		var buttons = document.querySelectorAll('button');
		buttons.forEach(function(button){
			button.addEventListener('click', function(){
				// At each click on a button, check if there are already
				// active sections, if so, delete the active class to start clean
				var actives = document.querySelectorAll('.active');
				if(actives.length > 0){
					actives.forEach(function(active){
						active.removeAttribute('class', 'active');
					})
				}
				// Set the clicked element to active
				var clicked = document.getElementById(this.className);
				clicked.setAttribute('class', 'active');
				// Hide mobile Nav when the button is clicked, to show the active section with the form
				mobileNav.setAttribute('class', 'hide');
			})
		})
		// When the back button is clicked, set the mobile nav to visible again
		var backButtons = document.querySelectorAll('p');
		backButtons.forEach(function(backBtn){
			backBtn.addEventListener('click', function(){
				mobileNav.removeAttribute('class', 'hide');
				var actives = document.querySelectorAll('.active');
				if(actives.length > 0){
					actives.forEach(function(active){
						active.removeAttribute('class', 'active');
					})
				}
			})
		})
	}
}());
