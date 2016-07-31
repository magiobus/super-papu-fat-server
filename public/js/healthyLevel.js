//var images = $(".friends-box");

function displayResult(results) {
  var counterOk = 0;
  var counterNo = 0;
  $.each(results, function(index, result) {
    if(result == 'ok')
      counterOk += 1;
    else
      counterNo += 1;
  });


  if(counterOk > counterNo){
    console.log('Siiii')
  }else {
    console.log('Noooo')
  }
}
