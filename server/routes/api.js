import express from "express";

import {
  getMessages,
  sendMessage,
  createConversation,
  getConversations,
  createUser,
  findUsers,
} from "../controllers/index.js";

const router = express.Router();

router.get("/messages/:conversationID", getMessages);

router.post("/messages", sendMessage);

router.post("/conversations", createConversation);

router.get("/conversations/:userID", getConversations);

router.post("/users", createUser);

router.get("/users/:email", findUsers);

export default router;
