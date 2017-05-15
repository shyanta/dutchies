// Wrap code in an IIFE
(function(){
	// Declare all global variables

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
	formEuro.addEventListener('submit', function(){
		event.preventDefault();
		convert(euroInput, dollarOutput, 'euro', ' $');
	});
	formDollar.addEventListener('submit', function(){
		event.preventDefault();
		convert(dollarInput, euroOutput, 'dollar', ' €');
	});
	formCelsius.addEventListener('submit', function(){
		event.preventDefault();
		convert(celsiusInput, farenheitOutput, 'celsius', ' °F');
	});
	formFarenheit.addEventListener('submit', function(){
		event.preventDefault();
		convert(farenheitInput, celsiusOutput, 'farenheit', ' °C');
	});
	formKilometer.addEventListener('submit', function(){
		event.preventDefault();
		convert(kilometerInput, milesOutput, 'kilometer', 'mi');
	});
	formMiles.addEventListener('submit', function(){
		event.preventDefault();
		convert(milesInput, kilometerOutput, 'miles', 'km');
	});

	// Write function to calculate the answers
	function convert(input, output, type, unit){
		// Prevent the page from reloading when the form is submitted
		// event.preventDefault();
		// Get the value from the input field
		var inputVal = input.value;
		// Save the formula's to var formula for each case
		var formula;
		switch(type){
			case 'euro':
				formula = inputVal * 1.0932;
				break;
			case 'dollar':
				formula = inputVal * 0.9148;
				break;
			case 'celsius':
				formula = (inputVal * 1.8) + 32;
				break;
			case 'farenheit':
				formula = (inputVal - 32) / 1.8;
				break;
			case 'kilometer':
				formula = inputVal / 1.609344;
				break;
			case 'miles':
				formula = inputVal * 1.609344;
		}
		// Calculate the outcome with the needed formula
		var OutputVal = formula;
		// Set the output value to a maximum of 2 decimals
		OutputVal = Math.round(OutputVal * 100) / 100;
		// Print the output value in the page for the user
		output.innerHTML = OutputVal +  unit;
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
