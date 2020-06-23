//Basic deleting "shuriken--active" class. Stay only base class for element display:none.
//Basic deleting "percent-helper--active" class. Stay only base class for element display:none.
let shuriken = document.getElementById("shuriken");
let percentHelper = document.getElementById("percentHelper");

percentHelper.classList.remove("app__percent-helper--active");
shuriken.classList.remove("calc__spinner--active");

//Basic symbols check in input field.
document.getElementById("calcInput").addEventListener("keydown", function(event) {
    document.getElementById("calcInput").value = document.getElementById("calcInput").value.replace(/(?![×÷])[A-Za-zÀ-ÿ]/, '');
    document.getElementById("calcInput").value = document.getElementById("calcInput").value.replace(/(?![×÷])[А-яЁё]/, '');
});

//-- GLOBAL VARIABLES --
let firstNumber;
let secondNumber;
let actualButton;
let inputStorage;

//-- BUTTONS EVENTS --

// KeyUp's actions and buttons clicks

//KeyUps

document.addEventListener("keyup", function(event) {
    switch (event.key) {
        case "+" :
            document.getElementById("calcInput").value = document.getElementById("calcInput").value.slice(0, -1);
            document.getElementById("plusButton").click();
            break;
        case "-" :
            document.getElementById("calcInput").value = document.getElementById("calcInput").value.slice(0, -1);
            document.getElementById("minusButton").click();
            break;
        case "*" :
            document.getElementById("calcInput").value = document.getElementById("calcInput").value.slice(0, -1);
            document.getElementById("multipleButton").click();
            break;
        case "/" :
            document.getElementById("calcInput").value = document.getElementById("calcInput").value.slice(0, -1);
            document.getElementById("divisionButton").click();
            break;
        // case "=" :
        case "Enter" :
                document.getElementById("calcInput").value = document.getElementById("calcInput").value.slice(0);
                document.getElementById("equalButton").click();
            break;
        case "=" :
            document.getElementById("calcInput").value = document.getElementById("calcInput").value.slice(0, -1);
            document.getElementById("equalButton").click();
            break;
        case "%" :
            document.getElementById("calcInput").value = document.getElementById("calcInput").value.slice(0, -1);
            document.getElementById("percentButton").click();
    }
});

//Button clicks

document.getElementById("button1").addEventListener('click', function (event) {
    document.getElementById("calcInput").value += "1";
    document.getElementById("calcInput").focus();
});

document.getElementById("button2").addEventListener('click', function (event) {
    document.getElementById("calcInput").value += "2";
    document.getElementById("calcInput").focus();
});

document.getElementById("button3").addEventListener('click', function (event) {
    document.getElementById("calcInput").value += "3";
    document.getElementById("calcInput").focus();
});

document.getElementById("button4").addEventListener('click', function (event) {
    document.getElementById("calcInput").value += "4";
    document.getElementById("calcInput").focus();
});

document.getElementById("button5").addEventListener('click', function (event) {
    document.getElementById("calcInput").value += "5";
    document.getElementById("calcInput").focus();
});

document.getElementById("button6").addEventListener('click', function (event) {
    document.getElementById("calcInput").value += "6";
    document.getElementById("calcInput").focus();
});

document.getElementById("button7").addEventListener('click', function (event) {
    document.getElementById("calcInput").value += "7";
    document.getElementById("calcInput").focus();
});

document.getElementById("button8").addEventListener('click', function (event) {
    document.getElementById("calcInput").value += "8";
    document.getElementById("calcInput").focus();
});

document.getElementById("button9").addEventListener('click', function (event) {
    document.getElementById("calcInput").value += "9";
    document.getElementById("calcInput").focus();
});

document.getElementById("button0").addEventListener('click', function (event) {
    document.getElementById("calcInput").value += "0";
    document.getElementById("calcInput").focus();
});

// Another operators buttons

document.getElementById("plusButton").addEventListener('click', function (event) {
    if (document.getElementById("calcInput").value !== "" ) {
        actualButton = " + ";
        pathOfConditionCreate(actualButton);
    }
    document.getElementById("calcInput").focus();
});

document.getElementById("minusButton").addEventListener('click', function (event) {
    if (document.getElementById("calcInput").value !== "" ) {
        actualButton = " - ";
        pathOfConditionCreate(actualButton);
    }
    document.getElementById("calcInput").focus();
});

document.getElementById("multipleButton").addEventListener('click', function (event) {
    if (document.getElementById("calcInput").value !== "" ) {
        actualButton = " * ";
        pathOfConditionCreate (actualButton);
    }
    document.getElementById("calcInput").focus();
});

document.getElementById("divisionButton").addEventListener('click', function (event) {
    if (document.getElementById("calcInput").value !== "" ) {
        actualButton = " / ";
        pathOfConditionCreate(actualButton);
    }
    document.getElementById("calcInput").focus();
});

document.getElementById("dot").addEventListener('click', function (event) {
    let inputStorage = document.getElementById("calcInput").value; // Actual value state of input
    inputStorage += ".";
    document.getElementById("calcInput").value = inputStorage;
    document.getElementById("calcInput").focus();
});

document.getElementById("equalButton").addEventListener('click', function (event) {
    let secondNumberStart;
    let inputStorage = document.getElementById("calcInput").value;
    secondNumberStart = firstNumber.length + 3;
    secondNumber = inputStorage.slice(secondNumberStart);
// Second number assignment and start spinner with delay mathAction
    spinnerOn();
    setTimeout(mathAction, 1500, firstNumber, secondNumber, actualButton);
});

document.getElementById("percentButton").addEventListener('click', function (event) {
    actualButton = " % ";
    pathOfConditionCreate(actualButton);
   percentHelper.classList.add("app__percent-helper--active");
    document.getElementById("calcInput").focus();
});

document.getElementById("cButton").addEventListener('click', function (event) {
    document.getElementById("calcInput").value = "";
    document.getElementById("calcInput").focus();
    percentHelper.classList.remove("app__percent-helper--active");
});

//-- FUNCTIONS --
function pathOfConditionCreate (actualButton) {  // First number and operator assignments
    inputStorage = firstNumber = document.getElementById("calcInput").value;
    inputStorage += actualButton;
    document.getElementById("calcInput").value = inputStorage;
    shuriken.classList.remove("calc__spinner--active");
    shuriken.classList.add("calc__spinner");
    return firstNumber,
            document.getElementById("calcInput").value,
            shuriken.classList;
}

function spinnerOn () {
    shuriken.classList.remove("calc__spinner");
    shuriken.classList.add("calc__spinner--active");
    return shuriken.classList;
}

function mathAction (firstNumber, secondNumber, actualButton) {
    percentHelper.classList.remove("app__percent-helper--active");
    document.getElementById("calcInput").value = "";
    let result;
    switch(actualButton) {
        case " + ": result = Number(firstNumber)+Number(secondNumber);
            break;
        case " - ": result = Number(firstNumber)-Number(secondNumber);
            break;
        case " * ": result = Number(firstNumber)*Number(secondNumber);
            break;
        case " / ": result = Number(firstNumber)/Number(secondNumber);
            break;
        case " % ": result = (Number(secondNumber) / 100) * (Number(firstNumber));
    }
     return document.getElementById("calcInput").value = String(result),
            percentHelper.classList;
}

// -- Unresolved troubles -- :
// 1.   let inputStorage = document.getElementById("calcInput").value;
//     Can't create one high layer variable for storage input value.
//2. Copypasta.
//3. Expansion of percentHelper text and deleting fade-out to left side.
//4. "Hardcode" check input value with .length.
