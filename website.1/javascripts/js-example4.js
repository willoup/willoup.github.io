var typeOfBread = 'white bread';
var numberOfSalamiSlices = 2;
var butter = true;


var totalSlices = numberOfSalamiSlices + 2;
var stringAddition = 'this will ' + 'be an awesome ' + 'sandwich';

function cutBread(){
  alert('Cutting ' +typeOfBread);
}

function useButter(spread){
  if(spread === true){
    alert('Spreading butter');
  }else{
    alert('Not spreading butter');
  }
}


function eat(){
  $("#result").html("nom nom nom");
}

function showSandwich(){
  $("#sandwich").attr('style','');
}

function makeSandwich(){
  cutBread();
  useButter(false);
  showSandwich();
  eat();
}