function chatService(socket, io) {
  const broadcast = () => {
    socket.on("broadcastMessage", (object) => {
      io.local.emit("handlerMessage", object);
    });
  };
  return { broadcast };
}

module.exports = chatService;
