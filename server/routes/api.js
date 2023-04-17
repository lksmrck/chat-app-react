import express from "express";

import { getMessages } from "../controllers/messageControllers.js";
import {
  /* createConversation,  */ getConversations,
} from "../controllers/conversationControllers.js";
import { createUser, findUsers } from "../controllers/userControllers.js";

const router = express.Router();

router.get("/messages/:conversationID", getMessages);

/* router.post("/messages", sendMessage); */

/* router.post("/conversations", createConversation); */

router.get("/conversations/:userID", getConversations);

router.post("/users", createUser);

router.post("/users/:email", findUsers);

export default router;
