import { io } from "socket.io-client";

const URL = process.env.REACT_APP_API || "http://localhost:8000";

const socket = io(URL, {
  autoConnect: false,
});

export default socket;
