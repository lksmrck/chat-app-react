import express from "express";

import {
  getMessages,
  sendMessage,
  createConversation,
  createUser,
  findUsers,
} from "../controllers/index.js";

const router = express.Router();

router.get("/messages", getMessages);

router.post("/message", sendMessage);

router.post("/conversations", createConversation);

router.post("/users", createUser);

router.get("/users/:email", findUsers);

export default router;
