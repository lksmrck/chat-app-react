const initializeUser = async (socket) => {
  socket.join(socket.user.userid);

  //TODO: přidat funkci, kt. přidá @ do konverzací + přidá počáteční zprávy.
};
