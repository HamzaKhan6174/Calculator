let inputValue = document.getElementById('user-input');
let clearDisplay = false;

document.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    let buttonText = e.target.innerHTML;
    let lastChar = inputValue.innerText.slice(-1);
    
    if (buttonText === 'AC') {
      inputValue.innerText = '0';
    } else if (buttonText === 'DEL') {
      inputValue.innerText = inputValue.innerText.slice(0, -1) || '0';
    } else if (buttonText === '=') {
      try {
        inputValue.innerText = eval(inputValue.innerText);
      } catch {
        inputValue.innerText = 'Error';
      }
      clearDisplay = true;
    } else if ('0123456789.'.includes(buttonText)) {
      if (clearDisplay) {
        inputValue.innerText = buttonText;
        clearDisplay = false;
      } else {
        inputValue.innerText = inputValue.innerText === '0' ? buttonText : inputValue.innerText + buttonText;
      }
    } else if ('+-*/%'.includes(buttonText)) {
      if (!'/*+-%'.includes(lastChar)) {
        inputValue.innerText += buttonText;
      }
    }
  }
});
