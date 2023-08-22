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
document.addEventListener("DOMContentLoaded", function () {
  const navbarListItems = document.querySelectorAll(".navbar-list-item");
  const settingsIcon = document.querySelector(".settings-icon");

  // Add the active class to the first item by default
  navbarListItems[0].classList.add("active");

  navbarListItems.forEach(function (item) {
    item.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default navigation behavior

      // Remove the active class from all items
      navbarListItems.forEach(function (item) {
        item.classList.remove("active");
      });

      // Add the active class to the clicked item
      item.classList.add("active");

      // Remove the active class from the settings icon
      settingsIcon.classList.remove("active");
    });
  });

  // Add click event listener for the settings icon
  settingsIcon.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default navigation behavior

    // Remove the active class from all items
    navbarListItems.forEach(function (item) {
      item.classList.remove("active");
    });

    // Add the active class to the settings icon
    settingsIcon.classList.add("active");
  });
});



