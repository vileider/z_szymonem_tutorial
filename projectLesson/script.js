let buttonCatcher = (buttonId) => {
    return    document.getElementById(buttonId);
    }



//adding value of button to input field
let addNumberToInputField = (buttonId) => {
    buttonCatcher('calc-screen').value
    += buttonCatcher(buttonId).value;
    
}

const eraseInputField = () => {
    buttonCatcher('calc-screen').value = "";
}


buttonCatcher('calc-button-1').addEventListener('click', () =>{
    addNumberToInputField('calc-button-1');
});

let addTriggerOnClickToId = (buttonId, triggeredFunction) => {
    buttonCatcher(buttonId).addEventListener('click', function () {triggeredFunction}
    
    )};

let consol1 = () => {
    console.log('sssss');
}
addTriggerOnClickToId('calc-button-2', consol1);
//addTriggerOnClickToId('calcButton3', addNumberToInputField('calcButton3'));

document.getElementById('calcButton3').addEventListener('click',() => {
    document.getElementById('calc-screen').value
    += document.getElementById('calcButton3').value
})


// let input = '0';
// let button = '1';
// a = '0';
// b = '1';



// let addFiveToInput = (variable) => {
//      variable + 5;
// }

// let addKotToInput = (variable) => {
//     return variable + 'kot';
// 
