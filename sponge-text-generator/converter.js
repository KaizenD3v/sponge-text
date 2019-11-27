const userInput = document.querySelector('.input');
const submitBtn = document.querySelector('.submit-btn');
const clearBtn = document.querySelector('.clear-btn');
const output = document.querySelector('.output');
const copyBtn = document.querySelector('.copy-btn');
const spongeImage = document.querySelector('#sponge-meme');


function convertText() {
	const userInputValue = userInput.value.toLowerCase();
	let toggleCaseFlag = false;
	let outputValue = [];
	const inputToArray = userInputValue.split('');
	let convertedText;


	inputToArray.forEach(pushMixCase);

	function pushMixCase(elm, index) {
		if( elm !== ' ' && toggleCaseFlag === false && elm.match(new RegExp('[a-zA-Z]')) ) {
			outputValue.push(userInputValue[index]);
			toggleCaseFlag = true;
		}
		else if ( elm !== ' ' && toggleCaseFlag === true && elm.match(new RegExp('[a-zA-Z]')) ){
			outputValue.push(userInputValue[index].toUpperCase());
			toggleCaseFlag = false;
		}
		else { outputValue.push(userInputValue[index]); }
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