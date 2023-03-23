import express from "express";

import { getMessages, sendMessage, createConversation } from "../controllers";

const router = express.Router();

router.get("/messages", getMessages);
router.post("/message", sendMessage);
router.post("/conversations", createConversation);

export default router;
