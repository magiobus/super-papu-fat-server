
module.exports = function (io) {
  io.on('connection', function (socket) {

    //socket.broadcast.emit('loadNewImage', {imageUrl: 'sendNudes'});

    socket.on('imageUploaded', function (data) {
      console.log('data: ', data)
      socket.broadcast.emit('loadNewImage', data);
    });
  });
}
