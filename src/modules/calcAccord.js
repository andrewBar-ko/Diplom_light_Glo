'use strict';

const data = {};

const calcAccord = () => {
	const calcBlock = document.getElementById('accordion'),
		checkBoxDiv = document.querySelectorAll('.onoffswitch'),
		checkBoxes = document.querySelectorAll('.onoffswitch-checkbox'),
		panels = document.querySelectorAll('.panel-collapse'),
		panelsHead = document.querySelectorAll('.panel-heading'),
		titleText = document.querySelectorAll('.title-text')[1],
		selectBox = document.querySelectorAll('.select-box'),
		calcResult = document.getElementById('calc-result'),
		distance = document.getElementById('distance');


	const countSum = () => {
		const calcType = document.querySelectorAll('.form-control');
		const typeValues = [];
		for (let i = 0; i < 4; i++) typeValues.push(parseFloat(calcType[i].options[calcType[i].selectedIndex].value));

		calcBlock.addEventListener('input', event => {
			const target = event.target;
			if (target.id === 'distance') {
				target.value = target.value.replace(/[^+\d]/g, '');
			}
		});

		const checkBox1Checked = () => {
			if (typeValues[0] === 2) {
				data.total *= 1.2;
			}
			data.diameter1 = typeValues[0];


			switch (true) {
			case (typeValues[1] === 2):
				data.total *= 1.3;
				break;
			case (typeValues[1] === 3):
				data.total *= 1.5;
				break;
			}
			data.numberRings1 = typeValues[1];
		};

		if (checkBoxes[0].checked) {
			titleText.style.display = 'none';
			selectBox[2].style.display = 'none';
			selectBox[3].style.display = 'none';

			data.total = 10000;

			checkBox1Checked();

			if (checkBoxes[1].checked) {
				data.total += 1000;
				data.bottom = 'yes, +1000';
			}

		} else if (!checkBoxes[0].checked) {
			titleText.style.display = '';
			selectBox[2].style.display = '';
			selectBox[3].style.display = '';

			data.total = 15000;

			checkBox1Checked();

			if (typeValues[2] === 2) {
				data.total *= 1.2;
			}
			data.diameter2 = typeValues[2];

			switch (true) {
			case (typeValues[3] === 2):
				data.total *= 1.3;
				break;
			case (typeValues[3] === 3):
				data.total *= 1.5;
				break;
			}
			data.numberRings2 = typeValues[3];

			if (checkBoxes[1].checked) {
				data.total += 2000;
				data.bottom = 'yes, 2000';
			}
		}
		calcResult.placeholder = `Примерная стоимость: ${data.total} руб.`;
	};

	for (let i = 0; i < checkBoxDiv.length; i++) {
		checkBoxDiv[i].addEventListener('click', () => {
			if (checkBoxes[i].checked) {
				checkBoxes[i].removeAttribute('checked');
			} else {
				checkBoxes[i].setAttribute('checked', 'checked');
			}
		});
	}

	const togglePanels = index => {
		countSum();
		for (let i = 0; i < panels.length; i++) {
			if (index === i) {
				panels[i].classList.add('in');
			} else {
				panels[i].classList.remove('in');
			}
		}
	};

	calcBlock.addEventListener('click', event => {
		event.preventDefault();
		let target = event.target;

		if (target.classList.contains('onoffswitch-inner')) {
			countSum();
		}

		if (target.classList.contains('construct-btn')  && !target.classList.contains('discount-btn')) {
			countSum();
			switch (true) {
			case (target.getAttribute('href') === '#collapseTwo'):
				panels[0].classList.remove('in');
				panels[1].classList.add('in');
				break;
			case (target.getAttribute('href') === '#collapseThree'):
				panels[1].classList.remove('in');
				panels[2].classList.add('in');
				break;
			case (target.getAttribute('href') === '#collapseFour'):
				panels[2].classList.remove('in');
				panels[3].classList.add('in');
				break;
			}
		} else {
			data.distance = +distance.value;
		}

		target = target.closest('.panel-heading');
		if (target) {
			panelsHead.forEach((item, i) => {
				if (item === target) {
					togglePanels(i);
				}
			});
		}
	});

	calcBlock.addEventListener('change', event => {
		const target = event.target;

		if (target.matches('select') || target.closest('.onoffswitch-checkbox')) {
			console.log(target);
			countSum();
		}
	});

};


export default calcAccord;