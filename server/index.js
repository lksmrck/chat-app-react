import express from "express";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";
import dotenv from "dotenv";
import routes from "./routes/api.js";
import messageHandler from "./controllers/socketio/messageHandler.js";
import { socketMiddleware } from "./socketConnectionMiddleware.js";
import addConversationHandler from "./controllers/socketio/addConversationHandler.js";

const app = express();

dotenv.config();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

const PORT = /* process.env.PORT ||  */ 8000;

app.use(express.json());
app.use("/", routes);

//Create HTTP server with Express
const server = http.createServer(app);

export const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", //FE
    methods: ["GET", "POST"],
  },
});

//Socket.io middleware - retreive user ID during connection
io.use(socketMiddleware);

server.listen(PORT, () => {
  console.log("Listening yo on port: " + PORT);
});

io.on("connection", (socket) => {
  console.log("User connected: " + socket.id);

  socket.on("join_chat", async (roomID) => {
    socket.join(roomID); //Room ID = conversation ID from FE
  });

  //Send a receive message
  socket.on("send_message", (message) => messageHandler(socket, message));

  socket.on("add_conversation", (conversation) => addConversationHandler(socket, conversation));

  socket.on("disconnect", () => {
    console.log("User diconnected", socket.id);
  });
});
