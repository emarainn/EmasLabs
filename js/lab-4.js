// CONDITIONS
// Expressions = something that results to a single value
// Conditional expression = something that results to a boolean value (true or false)

// Conditional statements and loops both evaluate a conditional expression
//     - they recognize if something is T or F and then it does something in response to that

// Conditional Operators
//     1. Comparison Operators 
//          > greater than a > b
//          < less than a < b
//          >= greater than or equal to a >= b
//          <= less than or equal to a <= b
//          == equal to a == b
//          != not equal to a != b
//     2. Logical Operators
//          && and
//          || or
//          ! not
// Order of operations to logical operatos
//     1. ! comes first
//     2. && comes next
//     3. || comes last
//     4. () grouping comes before all else

// Conditional Statements
//     if keyword
//          - evaluates a conditional expression
//          - if it is true, it executes code
//          - if it is false, it does nothing

//     else keyword
//          - it's optional
//          - runs a block of cold if all else fales
//          - evaluates another conditional statement
//          - in a decision three (starts with an if and has other options) the first true contision
//            if the onlt one to trigger



// ODD OR EVEN - WIDGET ONE
document.getElementById('odd-even').onchange = function() { 
    const number = Number(document.getElementById('odd-even').value);
    const resultElement = document.getElementById('odd-even-result');
    const inputElement = document.getElementById('odd-even');
    
    if (number % 2 === 0) {
        resultElement.textContent = "The Number is... Even";
        resultElement.style.color = 'green';  
        inputElement.style.backgroundColor = 'lightgreen'; 
    } else {
        resultElement.textContent = "The Number is... Odd";
        resultElement.style.color = 'red';
        inputElement.style.backgroundColor = 'lightcoral'; 
    }
}


// CONFIRM BUTTON - WEIDGET TWO
document.getElementById('confirm-button').onclick = function() {
    const resultElement = document.getElementById('confirm-paragraph');
    if(window.confirm('Click ok or cancel'))
    {
        // when we have an opening and closing tag, use textContent
        resultElement.textContent = 'confirmed';
        resultElement.style.color = 'green';
    }else{
        resultElement.textContent = 'not confirmed';
        resultElement.style.color = 'red';
    }
}


// SWITCH CHOICE - WEIDGET THREE
document.getElementById('switch-choice').onchange = function() {
    const userChoice = this.value;
    const textToOutput = document.getElementById('switch-output').value;
    switch(userChoice) {
        case 'alert':
            alert(textToOutput);
            break;
        case 'console':
            console.log(textToOutput);
            break;
        case 'text':
            document.getElementById('switch-result').textContent = "Text: " + textToOutput;
            break;
    }
}


// LOGICAL AND - WEIDGET FOUR
function logicalAndWidget() {
    const valueOne = document.getElementById('value-one-true').checked;
    const valueTwo = document.getElementById('value-two-true').checked;

    if (valueOne && valueTwo) {
        document.getElementById('and-result').textContent = `${valueOne} && ${valueTwo} = true`;
    } else {
        document.getElementById('and-result').textContent = `${valueOne} && ${valueTwo} = false`;
    }
}

// Add event listeners for changes to both radio groups
document.getElementById('value-one-true').onchange = logicalAndWidget;
document.getElementById('value-one-false').onchange = logicalAndWidget;
document.getElementById('value-two-true').onchange = logicalAndWidget;
document.getElementById('value-two-false').onchange = logicalAndWidget;



// AM or PM - WEIDGET FIVE
document.getElementById('am-pm-button').onclick = function() {
    const date = new Date();
    const amOrPm = date.getHours() >= 12 ? 'PM' : 'AM';
    document.getElementById('am-pm-result').textContent = 'It is currently: ' + amOrPm;
}



// LOGICAL OR - WEIDGET Six
function logicalOrWidget() {
    const valueOne = document.getElementById('or-value-one-true').checked;
    const valueTwo = document.getElementById('or-value-two-true').checked;

    if (valueOne || valueTwo) {
        document.getElementById('or-result').textContent = `${valueOne} || ${valueTwo} = true`;
    } else {
        document.getElementById('or-result').textContent = `${valueOne} || ${valueTwo} =  false`;
    }
}

// Add event listeners for changes to both radio groups
document.getElementById('or-value-one-true').onchange = logicalOrWidget;
document.getElementById('or-value-one-false').onchange = logicalOrWidget;
document.getElementById('or-value-two-true').onchange = logicalOrWidget;
document.getElementById('or-value-two-false').onchange = logicalOrWidget;



//TEXT TRUTHY/FALSY - WIDGET SEVEN
document.getElementById("text-tf").onchange = function() {
    let text = document.getElementById("text-tf").value;
    let element = document.getElementById("text-result");
    let inputElement = document.getElementById("text-tf");

    if (!text) {
        console.log("f");
        element.textContent = 'Text value: False';
        element.style.color = 'red';
        inputElement.style.backgroundColor = 'lightcoral';
    } else {
        console.log("t");
        element.textContent = 'Text value: True';
        element.style.color = 'green';
        inputElement.style.backgroundColor = 'lightgreen'; 
    }
};



//NUMERIC TRUTHY/FALSY 
document.getElementById("number-tf").onchange = function() {
    let number = document.getElementById("number-tf").value;
    let element = document.getElementById("numeric-result");
    let inputElement = document.getElementById("number-tf");

    if (!number || number == "0") {
        console.log("f");
        element.textContent = 'Numeric value: False';
        element.style.color = 'red';
        inputElement.style.backgroundColor = 'lightcoral';
    } else {
        console.log("t");    
        element.textContent = 'Numeric value: True';
        element.style.color = 'green';
        inputElement.style.backgroundColor = 'lightgreen'; 
    }
};
