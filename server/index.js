import express from "express";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";
import dotenv from "dotenv";
import routes from "./routes/api.js";
import messageHandler from "./controllers/socketio/messageHandler.js";

const app = express();

dotenv.config();

app.use(cors());

const PORT = /* process.env.PORT ||  */ 8000;

app.use(express.json());
app.use("/", routes);

//Create HTTP server with Express
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", //FE
    methods: ["GET", "POST"],
  },
});

server.listen(PORT, () => {
  console.log("Listening yo on port: " + PORT);
});

io.on("connection", (socket) => {
  console.log("User connected: " + socket.id); //when someone connects -> přiřadí random ID

  socket.on("join_chat", (data) => {
    //data bude room id
    socket.join(data); //based on the room the entered in FE
  });

  //DONE
  //Send a received message
  socket.on("send_message", (message) => messageHandler(socket, message));

  socket.on("disconnect", () => {
    //when someone wants to disconnect (close the tab)
    console.log("User diconnected", socket.id);
  });
});
