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
  //socket.emit('sendReaction', {reaction: 'Temamas'})
  //alert(data.imageUrl)

  console.log('data when new image: ', data)

  socket.emit('sendReaction', {reaction: 'ok', emmiterId: data.emmiterId})

  $("#sendedImage").attr('src', data.imageUrl)
  $("#sendedImage").show();
})

socket.on('reciveReaction', function (data) {
  responses.push(data);

  if(responses.length == 3)
    displayResult(responses);

});
