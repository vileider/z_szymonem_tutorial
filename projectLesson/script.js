
//adding value of button to input field
const addButtonValueToInputField = (buttonId) => {
    document.getElementById('calc-screen').value
    += document.getElementById(buttonId).value;
    
};

let calculatorMemory = {
    savedValue: 0,
    operator: ''
};
const modifyCalculatorMemoryOperator = (chosenOperator) => {
    calculatorMemory.operator = chosenOperator;
};

const savingInputValueToMemory = () => {
    calculatorMemory.savedValue = document.getElementById('calc-screen').value;
};



const addButtonService = () => {
    modifyCalculatorMemoryOperator('+');
    savingInputValueToMemory();
    document.getElementById('calc-screen').value = "";
};

document.getElementById('calc-button-plus')
.addEventListener('click', () => {
    addButtonService();
    console.log('dziala?');
});


document.getElementById('calc-button-equal')
.addEventListener('click', () => {
    if(calculatorMemory.operator === '+'){
        console.log(parseInt(calculatorMemory.savedValue)+
            parseInt(document.getElementById('calc-screen').value));
    }
});

const addErasingTriggerOnCeButton = () => {
    document.getElementById('calc-button-CE')
    .addEventListener('click', () => {
        document.getElementById('calc-screen').value = "";
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

