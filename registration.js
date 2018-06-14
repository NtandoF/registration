var textInputElem = document.querySelector('.textInput');
var displayElem = document.querySelector('.display');
var AddBtn = document.querySelector('.AddReg');
var dropbtnElem = document.querySelector('.dropbtn');
var clearBtn = document.querySelector('.clear');
var registrationElem = document.querySelector('.registration');

  var regFact = RegFactory();

    function createRegList(regisNum){
      var dispay = document.createElement("li");
      dispay.innerText = regisNum;
      display.appendChild(dispay);
    }

    function registrationNumber() {
      var value = textInputElem.value
      textInputElem.value = '';
}

AddBtn.addEventListener('click', registrationNumber);
