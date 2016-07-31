var socket = io.connect();

var responses = [];
/*socket.on('news', function (data) {
  console.log(data);
  socket.emit('my other event', { my: 'data' });
});
*/

function imageUploaded (imageUrl){
  socket.emit('imageUploaded', {imageUrl: imageUrl.replace('public', '')})
}

socket.on('loadNewImage', function (data) {

  //socket.emit('sendReaction', {reaction: 'ok', emmiterId: data.emmiterId})

  $("#sendedImage").attr('src', data.imageUrl)
  $("#myBtn").click()

  $("#sano").click(function(){
    socket.emit('sendReaction', {reaction: 'ok', emmiterId: data.emmiterId})
  });

  $("#nsano").click(function(){
    socket.emit('sendReaction', {reaction: 'no', emmiterId: data.emmiterId})
  });

})

socket.on('reciveReaction', function (data) {
  responses.push(data);

  if(responses.length == 3)
    displayResult(responses);

});
