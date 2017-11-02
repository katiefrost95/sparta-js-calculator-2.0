document.addEventListener("DOMContentLoaded", function() {
  console.log('the content is loaded');

var number = "";
var numberOne = 0;
var numberTwo = 0;
var add = false;
var minus = false;
var divide = false;
var times = false;
var screen = document.getElementById("screen");

// Buttons responding
makeButtonsRespond();
function makeButtonsRespond(){
// Number buttons
  var buttonNum = document.querySelectorAll('.buttonNum')
  for (var i = 0; i < buttonNum.length; i++) {
    var button = buttonNum[i];

    button.addEventListener('click', function(event) {
      number = number + this.value;
      screen.innerHTML = number;
      console.log(number);
    })
  }
// operations buttons
  var operator = document.querySelectorAll('.operator')
  for (var i = 0; i < operator.length; i++) {
    var operator_button = operator[i]
    operator_button.addEventListener('click', function(event) {
      var numberOne = parseFloat(number);
      number = "";
      if (this.value === "+") {
        var add = true;
      }
      var numberTwo = parseFloat(number);
      console.log(this.value + ' was clicked');
    })
  }
// equals button
  var buttonEquals = document.querySelector(".equals");
  buttonEquals.addEventListener("click", function(event) {
    var numberTwo = parseFloat(number);
    if (!add) {
      screen.innerHTML = addNumbers(numberOne, numberTwo);
      console.log(this.value + ' was clicked');
    }
  })
//clear button
  var buttonClear = document.getElementsByClassName("buttonClear");
  buttonClear[0].addEventListener("click", handleClick);
  function handleClick() {
    console.log(this.value + ' was clicked')
  }
}
// Calculator Functions
function addNumbers(firstNumber, secondNumber) {
  return parseFloat(firstNumber) + parseFloat(secondNumber);
}
function minusNumbers(firstNumber, secondNumber) {
  return parseFloat(firstNumber) - parseFloat(secondNumber);
}
function divideNumbers(firstNumber, secondNumber) {
  return parseFloat(firstNumber) / parseFloat(secondNumber);
}
function timesNumbers(firstNumber, secondNumber) {
  return parseFloat(firstNumber) * parseFloat(secondNumber);
}

})
