var typeOfBread = 'white bread';
var numberOfSalamiSlices = 2;
var butter = true;

// 2. Adding variable with a number.
var totalSlices = numberOfSalamiSlices + 2;
var stringAddition = 'this will ' + 'be an awesome ' + 'sandwich';

// 3. Alert data to the user
// alert('totalSlices: ' + totalSlices);

// 4. The following is a simple function.
function cutBread(){
  // 5. The alert, is actually a javascript built-in function!
  alert('Cutting ' +typeOfBread);
}

// 6. Functions can become more generic by passing in an input
function useButter(spread){
  // 7. "if" statements allow you to add logic!
  // e.g. if it's raining, take a coat with you!
  if(spread === true){
    alert('Spreading butter');
  }else{
    alert('Not spreading butter');
  }
}


function eat(){
  // 8. display something in HTML using the document.getElementById("id").innerHTML
  $("#result").html("nom nom nom");
}

function showSandwich(){
  // 9. Change something on an HTML element, using the setAttribute()
  $("#sandwich").attr('style','');
}

// 10. Call functions inside functions!
function makeSandwich(){
  cutBread();
  useButter(false);
  showSandwich();
  eat();
}