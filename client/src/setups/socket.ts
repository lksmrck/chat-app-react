import { io } from "socket.io-client";

const URL = /* process.env.REACT_APP_API; */ "chat-app-production-12a5.up.railway.app";

const socket = io(URL /* "http://localhost:8000" */, {
  autoConnect: false,
});

export default socket;
