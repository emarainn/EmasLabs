// there are two types of funcitons
// 1. named functions
// 2. anonymous functions
// named functions are functions that are given a name
// anonymous functions are functions that are not given a name instead you assign a variable

// Function
//  1. Named Function
//         - start with the "function" keyword
//         - give the function a name: camelCase
//         - () with any optional parameters inside
//                - parameters when we define a function
//                - arguments when we call a function
//         -{} to define the body of the funtion 
//                - we can inclide an optional return statement
//                     - return statements send a value back to a function call 
//  2. Anonymous Function

// in order to use a function, you need to call it

// JavaScript Hoists functions
//     - hoisting function means that the function is available before and after it is defined
//     - you can use the function before or after you delcare them
//     - ONLY CAN BE USED WITH NAMED FUNCTIONS
// converse();

function sayHello(name) {
    
    if (name === undefined) {
        name = document.getElementById('username').value || 'Hooman'; 
        document.getElementById('output-hello').textContent = "Hello " + name;
    }

    console.log(`Hello ${name}`);

    
}

function discussDay(day = getDay(), weather = 'sunny') {
    let dayCont = `It's ${day}.`;
    let weatherCont = `The weather is ${weather}.`;
    let textCont = `It is a good day. I'm fine.`;
    console.log(dayCont);
    console.log(weatherCont);
    console.log(textCont);
    // the grave key (`, backtick) creates a template string literal
    //    - we can use js code inside by putting in ${}
    document.getElementById('output-day').innerHTML = dayCont + '<br>' + weatherCont + '<br>' + textCont;

}

function sayGoodbye() {
    let bye = 'Goodbye';

    console.log(bye);
    document.getElementById('output-goodbye').textContent = bye;
}

function converse() {
    // Calling functions inside another function
    sayHello();  // Uses a predefined name
    // without an argument, the parameter will be undefined
    //     - undefind is a datatyp: mean unintentional value of nothing
    //     - null is a datatype: mean intentional value of nothing
    discussDay(getDay(), 'shitty');  // Predefined values for day and weather
    sayGoodbye();
}

function getDay() {
    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    return weekday[today.getDay()];
}