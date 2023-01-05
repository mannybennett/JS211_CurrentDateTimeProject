// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.    
const numberToString = () => {
    const num = document.getElementById('text').value 
    let conversion = num.toString()
    document.getElementById("string").innerHTML = conversion
}


// Write a JavaScript program to convert a string to the number.
const stringToNumber = () => {
  const string = document.getElementById('stringInput').value 
  let conversion2 = parseInt(string)
  document.getElementById("number").innerHTML = conversion2
}

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
const dataType = () => {
    const dataInput = document.getElementById('dataData').value
 
    if (dataInput === 'true' || dataInput === 'false') {
      return document.getElementById("whatData").innerHTML = 'Boolean'
    }
    if (dataInput === 'Null') {
      return document.getElementById("whatData").innerHTML = 'Null'
    }
    if (dataInput === 'Undefined') {
      return document.getElementById("whatData").innerHTML = 'Undefined'
    }
    if (isNaN(dataInput)) {
      return document.getElementById("whatData").innerHTML = 'NaN'
    } else {
      return document.getElementById("whatData").innerHTML = 'Number'
    }
}

  
// Write a JavaScript program that adds 2 numbers together.
const sum = () => {
    const numInput1 = parseInt(document.getElementById('num1').value)
    const numInput2 = parseInt(document.getElementById('num2').value)
    let sumInputs = numInput1 + numInput2
    return document.getElementById("result").innerHTML = sumInputs
}

// Write a JavaScript program that runs only when 2 things are true.
const bothTrue = () => {
    const userInput1 = document.getElementById('input1').value
    const userInput2 = document.getElementById('input2').value
    document.getElementById("bothTrueDiv").innerHTML = userInput1 && userInput2
}

// Write a JavaScript program that runs when 1 of 2 things are true.
const oneTrue = () => {
    const userInput1 = document.getElementById('input1b').value
    const userInput2 = document.getElementById('input2b').value
    document.getElementById("oneTrueDiv").innerHTML = userInput1 || userInput2
}

// Write a JavaScript program that runs when both things are not true.  
const bothFalse = () => {
    const userInput1 = document.getElementById('input1c').value
    const userInput2 = document.getElementById('input2c').value
    document.getElementById("bothFalseDiv").innerHTML = !userInput1 && !userInput2
}

// ***prevents crashing***

const form = document.querySelector("form")
form.addEventListener("submit", e => {
    e.preventDefault();
})

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24


// const addForm = document.getElementById('add');
// addForm.addEventListener("submit", e => {
//   e.preventDefault()

//   const n1 = document.getElementById("number1").value;
//   const n2 = document.getElementById("number2").value;
//   const sum = add(stringToNum(n1), stringToNum(n2))
//   document.getElementById("sum").innerHTML = `The Sum of ${n1} + ${n2} is ${sum}`;
// })
