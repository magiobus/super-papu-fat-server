
module.exports = function (io) {
  io.on('connection', function (socket) {

    socket.on('imageUploaded', function (data) {
      socket.broadcast.emit('loadNewImage', {
        imageUrl: data.imageUrl,
        emmiterId: socket.id
      });
    });

    socket.on('sendReaction', function (data) {
      socket.to(data.emmiterId).emit('reciveReaction', data.reaction);
    });

  });
}
