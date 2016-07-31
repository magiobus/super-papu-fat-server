var socket = io.connect();

/*socket.on('news', function (data) {
  console.log(data);
  socket.emit('my other event', { my: 'data' });
});
*/

function imageUploaded (imageUrl){
  socket.emit('imageUploaded', {imageUrl: imageUrl.replace('public', '')})
}

socket.on('loadNewImage', function (data) {
  //alert(data.imageUrl)
  $("#sendedImage").attr('src', data.imageUrl)
  $("#sendedImage").show();
})
