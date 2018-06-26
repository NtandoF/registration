function RegFactory(){

var regNum = {};

function RegFunction(regNums, town){
    if (regNums !== '' && town) {
      if (regNum[regNums]=== undefined) {
        regNum[regNums] = 0;
    }
  }
}

function TownReg(regNums){

  var list = ['CA ', 'CAW', 'CL ', 'CJ '];

  if (regNums != '') {
      if (regNum[regNums] === undefined) {

    for (var i = 0; i < list.length; i++) {
    if (regNums.startsWith(list[i])) {

  regNum[regNums] = 0;
  return true;
          }
        }
      }
       else {
        return false;
      }

    }
  }

function getRegNum(){
  return regNum;
}

function getcount() {
  return Object.keys(regNum);
}


  function gettowns(){
    return towns;
  }
  function regfilter(town){
    var townsreg = Object.keys(regNum);
    if (town === 'allTowns') {
      return townsreg;
    }

    if (town === 'filter') {
      return townsreg;
      var none = townsreg.clear();
      return none;
    }

    var filtetown =townsreg.filter(function(storetown, storeReg) {
      return storetown.startsWith(town)
    })
    location.hash = town;
    return filtetown;

  }


return {
  RegFactory,
  regfilter,
  getcount,
  RegFunction,
  TownReg,
  getRegNum
  }
}
