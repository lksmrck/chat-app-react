import { io } from "socket.io-client";

const URL = process.env.REACT_APP_API;

const socket = io(URL ? URL : "http://localhost:8000" /* "http://localhost:8000" */, {
  autoConnect: false,
});

export default socket;
