export const socketMiddleware = (socket, next) => {
  socket.user = 123;
  next();
};

export const wrap = (middleware) => (socket, next) => middleware(socket.request, {}, next);
