export const socketMiddleware = (socket, next) => {
  const userID = socket.handshake.auth.userID;
  socket.userID = userID;
  console.log(userID);
  next();
};
