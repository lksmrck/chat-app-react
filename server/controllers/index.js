import express from "express";

export const getMessages = async (req, res) => {
  /*   const conversationId = req.query.conversationId;  */ //identifikátor konverzace

  try {
    const conversation = 0; //vytažení z DB

    res.status(200).json(conversation);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const sendMessage = async (req, res) => {
  const { sender, text, date } = req.body;
  console.log(sender);
  console.log(text);
  console.log(date);

  try {
    //Ulozeni do db
    res.status(201).json(message);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const createConversation = async (req, res) => {
  const { conversationId } = req.body;

  try {
    res.status(201).json(conversationId);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getUser = async (email) => {};
