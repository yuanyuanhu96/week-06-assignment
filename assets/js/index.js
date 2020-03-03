//grab the add element from html
const addASelect = document.querySelector("#add-a");
const addBSelect = document.querySelector("#add-b");
const addResultSelect = document.querySelector("#add-result");
const addSolveSelect = document.querySelector("#add-solve");

//grab the subtract element from html

const subtractASelect = document.querySelector("#subtract-a");
const subtractBSelect = document.querySelector("#subtract-b");
const subtractResultSelect = document.querySelector("#subtract-result");
const subtractSolveSelect = document.querySelector("#subtract-solve");

//grab the multiply element from html
const multiplyASelect = document.querySelector("#multiply-a");
const multiplyBSelect = document.querySelector("#multiply-b");
const multiplyResultSelect = document.querySelector("#multiply-result");
const multiplySolveSelect = document.querySelector("#multiply-solve");

//grab the divide element from html

const divideASelect = document.querySelector("#divide-a");
const divideBSelect = document.querySelector("#divide-b");
const divideResultSelect = document.querySelector("#divide-result");
const divideSolveSelect = document.querySelector("#divide-solve");



function clickAddSolve() {
    let addA = addASelect.value
    addA = parseInt(addA, 10);
    let addB = addBSelect.value
    addB = parseInt(addB, 10);

    let addResult = addA + addB;
    addResultSelect.value = addResult;
}

function clickSubtractSolve() {
    let subtractA = subtractASelect.value
    subtractA = parseInt(subtractA, 10);
    let subtractB = subtractBSelect.value
    subtractB = parseInt(subtractB, 10);

    let subtractResult = subtractA - subtractB;
    subtractResultSelect.value = subtractResult;
}

function clickMultiplySolve() {
    let multiplyA = multiplyASelect.value
    multiplyA = parseInt(multiplyA, 10);
    let multiplyB = multiplyBSelect.value
    multiplyB = parseInt(multiplyB, 10);

    let multiplyResult = multiplyA * multiplyB;
    multiplyResultSelect.value = multiplyResult;
}


function clickDivideSolve() {
    let divideA = divideASelect.value
    divideA = parseInt(divideA, 10);
    let divideB = divideBSelect.value
    divideB = parseInt(divideB, 10);

    let divideResult = divideA / divideB;
    divideResultSelect.value = divideResult;
}




addSolveSelect.addEventListener("click", clickAddSolve);

subtractSolveSelect.addEventListener("click", clickSubtractSolve);

multiplySolveSelect.addEventListener("click", clickMultiplySolve);

divideSolveSelect.addEventListener("click", clickDivideSolve);



