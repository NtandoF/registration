var textInputElem = document.querySelector('.textInput');
var displayElem = document.querySelector('.display');
var AddBtn = document.querySelector('.AddBtn');
var dropbtnElem = document.querySelector('.dropbtn');
var clearBtn = document.querySelector('.clear');
var counter = document.querySelector('.count');
var registrationElem = document.querySelector('.registration');
var storedregs = localStorage.getItem('regNum') ? JSON.parse(localStorage.getItem('regNum')) : {};

  var regFact = RegFactory(storedregs);


  function createReg(registrationList) {

  var newElement = document.createElement("li");
  newElement.textContent = registrationList;
  displayElem.appendChild(newElement);
}

    function registrationNumber() {
      var value = textInputElem.value.trim().toUpperCase();
      createReg(value);
        textInputElem.value = '';

        if (regFact.TownReg(value)){
               localStorage.setItem('regNum', JSON.stringify(regFact.getcount()));
               createReg(value);

             }

}

AddBtn.addEventListener('click', registrationNumber);

function clearButton(){
      localStorage.clear();
      location.reload();

  }

clearBtn.addEventListener('click',clearButton);
