const userInput = document.querySelector('.input');
const submitBtn = document.querySelector('.submit-btn');
const clearBtn = document.querySelector('.clear-btn');
const output = document.querySelector('.output');
const copyBtn = document.querySelector('.copy-btn');
const spongeImage = document.querySelector('#sponge-meme');


function convertText() {
	const userInputValue = userInput.value;
	const userInputValueLower = userInputValue.toLowerCase();
	let outputValue = [];
	const inputToArray = userInputValue.split('');
	let convertedText;


	console.log(userInputValueLower);
	inputToArray.forEach(pushMixCase);

	function pushMixCase(elm, index) {

		if( index === 0 ) {
			outputValue.push(userInputValueLower[index].toLowerCase());
		}
		else {
			if( index % 2 === 1) {
			outputValue.push(userInputValueLower[index].toUpperCase());

			}
			else {
				outputValue.push(userInputValueLower[index]);
			}
		}
	}
	convertedText = outputValue.join('');
	output.value = convertedText;
	displayImage();
} // END converText Function


function clearText() {
	userInput.value = '';
	output.value = '';
}

function displayImage() {
	spongeImage.style.display = 'block';
}


function copyText() {
	output.select();
	document.execCommand('copy');
}

submitBtn.addEventListener('click', convertText);
clearBtn.addEventListener('click', clearText);
copyBtn.addEventListener('click', copyText);