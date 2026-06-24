const display = document.getElementById('display');
const operators = ['+', '-', '*', '/'];


function appendValue(val) {
	const lastChar = display.value.slice(-1);

	if (operators.includes(lastChar) && operators.includes(val)) {
		display.value = display.value.slice(0, -1) + val;
		return;
	}

	if (display.value === '' && operators.includes(val) && val !== '-') {
		return;
	}

	if (display.value === '0' && !isNaN(val)) {
		display.value = val;
	} else {
		display.value += val;
	}
}

function clearDisplay() {
	display.value = '';
}


function backspace() {
	display.value = display.value.slice(0, -1);
}

function calculateResult() {
	try {
		if (display.value.trim() !== '') {
			const lastChar = display.value.slice(-1);

			if (operators.includes(lastChar)) {
				display.value = "Error";
				return;
			}

			const result = new Function(`return ${display.value}`)();

			if (result === Infinity || result === -Infinity || isNaN(result)) {
				display.value = "Error";
			} else {

				display.value = Number(result.toFixed(8)).toString();
			}
		}
	} catch (error) {
		display.value = 'Error';
	}
}