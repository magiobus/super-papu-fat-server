//var images = $(".friends-box");

var reactionsResultDiv = $("#reactionsResult");
var reactionsResultText = $("#reactionsResultText")

function displayResult(results) {
  var counterOk = 0;
  var counterNo = 0;
  $.each(results, function(index, result) {
    if(result == 'ok')
      counterOk += 1;
    else
      counterNo += 1;
  });

  var resultText;

  if(counterOk > counterNo){
    resultText = 'Siiii'
  }else {
    resultText = 'Noooo'
  }

  console.log(resultText)

  reactionsResultText.text(resultText)
  reactionsResultDiv.show()

}
