document.addEventListener('DOMContentLoaded', () => {
	const inputContainers = document.querySelectorAll('.search-container');

	inputContainers.forEach((container) => {
		const searchInput = container.querySelector('.search-input');
		const optionsList = container.querySelector('.options-list');
		const optionItems = optionsList.getElementsByTagName('li');
		const inputWrapper = container.querySelector('.input-wrapper');

		searchInput.addEventListener('click', () => {
			optionsList.style.display = 'block';
			inputWrapper.classList.add('active-search-field');
			searchInput.classList.add('active-search-field');
		});

		searchInput.addEventListener('input', () => {
			const searchTerm = searchInput.value.toLowerCase();
			for (const option of optionItems) {
				const optionText = option.innerText.toLowerCase();
				if (optionText.includes(searchTerm)) {
					option.style.display = 'block';
				} else {
					option.style.display = 'none';
				}
			}
		});

		document.addEventListener('click', (event) => {
			if (!event.target.matches('.search-input') && !event.target.matches('.options-list')) {
				optionsList.style.display = 'none';
				inputWrapper.classList.remove('active-search-field');
				searchInput.classList.remove('active-search-field');
			}
		});
	});
});

// Stepper Js
var currentStep = 1;
var numSteps = 5;

function nextStep() {
	currentStep++;
	if (currentStep > numSteps) {
		currentStep = 1;
	}
	var stepper = document.getElementById('stepper1');
	var steps = stepper.getElementsByClassName('step');

	Array.from(steps).forEach((step, index) => {
		let stepNum = index + 1;
		if (stepNum === currentStep) {
			addClass(step, 'editing');
		} else {
			removeClass(step, 'editing');
		}
		if (stepNum < currentStep) {
			addClass(step, 'done');
		} else {
			removeClass(step, 'done');
		}
	});
}

/* get, set class, see https://ultimatecourses.com/blog/javascript-hasclass-addclass-removeclass-toggleclass */

function hasClass(elem, className) {
	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}

function addClass(elem, className) {
	if (!hasClass(elem, className)) {
		elem.className += ' ' + className;
	}
}

function removeClass(elem, className) {
	var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
	if (hasClass(elem, className)) {
		while (newClass.indexOf(' ' + className + ' ') >= 0) {
			newClass = newClass.replace(' ' + className + ' ', ' ');
		}
		elem.className = newClass.replace(/^\s+|\s+$/g, '');
	}
}

// Range Slider
