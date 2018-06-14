function RegFactory(){

var regNum = {};
var enteredReg ='';

function RegFunction(town, regNums){
    if (regNums !== '' && town) {
      if (regs[regNums]=== undefined) {
        regs[regNums] = 0;
    }
  }
}

function TownReg(regNums){
  regNum[regNums] = 0;

  var list = ["CJ", "CK", "CL", "CN"];

  if (regNums != '') {
      if (regNum[regNums] === undefined) {

    for (var i = 0; i < list.length; i++) {
    if (regNums.startsWith(list[i])) {

          }
        }
        return true;

      } else {
        return false;
      }

    }
  }

function forRegNums() {
  return enteredReg;
}

function getRegNum(){
  return regNum;
}


return {
  RegFactory,
  RegFunction,
  TownReg,
  forRegNums,
  getRegNum,
  }
}
