document.addEventListener("DOMContentLoaded", function() {
  console.log('the content is loaded');

makeButtonsRespond();
function makeButtonsRespond(){
  var buttonNum = document.querySelectorAll('.buttonNum')
  for (var i = 0; i < buttonNum.length; i++) {
    var button = buttonNum[i];

    button.addEventListener('click', function(event) {
      console.log(this.value + ' was clicked');
    })
  }
  var operator = document.querySelectorAll('.operator')
  for (var i = 0; i < operator.length; i++) {
    var operator_button = operator[i];

    operator_button.addEventListener('click', function(event) {
      console.log(this.value + ' was clicked');
    })
  }

}

})
