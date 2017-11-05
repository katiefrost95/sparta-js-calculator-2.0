document.addEventListener("DOMContentLoaded", function() {
  console.log('the content is loaded');

// var numbers = [];
var number = "";
var firstNumber;
var firstNumberTrue = true;
var secondNumber;
var operator;
var screen = document.getElementById('screen');

makeButtonsRespond ();
function makeButtonsRespond () {

  var buttonNum = document.querySelectorAll('.buttonNum')/*selects all buttonNum to do following function*/
  for (var i = 0; i < buttonNum.length; i++) {/*makes function loop through them*/
    var button = buttonNum[i]; /* making new variable to pass into new function*/
    button.addEventListener('click', function (event){ /*adding listener for the click for it to respond*/
      // numbers.push(this.value) /*saving the numbers into the array made above*/
      number = number + this.value
      screen.innerHTML = number;/*puts it on the screen*/
      console.log(number);
    })
  }
  var operator = document.getElementsByClassName('operator')
  for (var i = 0; i < operator.length; i++) {
    var opButton = operator[i];
    opButton.addEventListener('click', function (event){
      screen.innerHTML = this.value;
      operator = this.innerHTML;
      console.log(operator);
      if (firstNumberTrue) {
        firstNumber =  number;
        firstNumberTrue = false;
        number = "";
      }
    })
  }
  var equalsButton = document.getElementsByClassName('equals');
    equalsButton[0].addEventListener('click', function (result) {
      secondNumber =  number;
      var answer = calculation (operator);
      screen.innerHTML = answer;
      console.log("answer is " + answer);
    })

}

function calculation (operator) {
  if (operator === "+"){
  return parseFloat(firstNumber) + parseFloat(secondNumber);
} else if (operator === "-") {
  return parseFloat(firstNumber) - parseFloat(secondNumber);
} else if (operator === "/") {
  return parseFloat(firstNumber) / parseFloat(secondNumber);
} else if (operator === "*") {
  return parseFloat(firstNumber) * parseFloat(secondNumber);
} else {
  return "invalid";
}
}

clearButton();
function clearButton (){
  var buttonClear = document.getElementsByClassName('buttonClear');
  buttonClear[0].addEventListener('click', function (clear){
    screen.innerHTML = "Sparta Calculator";
    number = "";
    firstNumber = "";
    secondNumber = "";
    firstNumberTrue = true;
  })

}
})
