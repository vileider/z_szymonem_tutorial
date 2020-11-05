const button1Id = document
.getElementById('calc-button-1');
const inputField = document
.getElementById('calc-screen');
const addValueToInputField = () => {
    inputField.value += button1Id.value;
}



button1Id.addEventListener('click', addValueToInputField);


let input = '0';
let button = '1';
a = '0';
b = '1';