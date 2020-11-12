
//adding value of button to input field
const addButtonValueToInputField = (buttonId) => {
    document.getElementById('calc-screen').innerText
    += document.getElementById(buttonId).innerText;
    
};

let calculatorMemory = {

    savedValue: 0,
    savedValue2: 0,
    operator: ''
};

const plusButtonService = () => {
    calculatorMemory.savedValue2 = 0;
    calculatorMemory.savedValue = document.getElementById('calc-screen').innerText;
    calculatorMemory.operator = '+';
    document.getElementById('calc-screen').innerText = "";
};

document.getElementById('calc-button-plus')
.addEventListener('click', () => {
    plusButtonService();
    console.log('dziala?');
});

const showMathematicalResult = () => {
    calculatorMemory.savedValue2 = document.getElementById('calc-screen').innerText;
    if(calculatorMemory.operator === "+"){
        document.getElementById('calc-screen').innerText = 
        (parseInt(calculatorMemory.savedValue) 
        + parseInt(calculatorMemory.savedValue2));
    }
    
    
};
/////////////////////////////////////////////////////////////////////

document.getElementById('calc-button-equal')
.addEventListener('click', () => {
    if(calculatorMemory.operator === '+'){/*
        console.log(parseInt(calculatorMemory.savedValue)+
            parseInt(document.getElementById('calc-screen').value));*/
            showMathematicalResult()
    }  
});

const addErasingTriggerOnCeButton = () => {
    document.getElementById('calc-button-CE')
    .addEventListener('click', () => {
        document.getElementById('calc-screen').innerText = " ";
    })
};

addErasingTriggerOnCeButton();

const addTriggerOnClickToId = (buttonId, triggeredFunction) => {
    document.getElementById(buttonId).addEventListener('click', () => {
        triggeredFunction([buttonId])
    })};


const consol1 = () => {
    console.log('sssss');
};

for(a=0; a<10; a++){
    addTriggerOnClickToId('calc-button-'+a, addButtonValueToInputField);
};

