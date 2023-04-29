import axios from "axios";
import { MessageObject, UserObject } from "../types/types";

const API = axios.create({ baseURL: process.env.REACT_APP_API });

export const getConversations = async (userId: string) => {
  const res = await API.get("/conversations/" + userId);
  return res.data;
};

export const getMessages = async (conversationID: string) => {
  const res = await API.get("/messages/" + conversationID); //
  return res.data;
};

export const findUser = async (email: string, searchingUserID: string) => {
  const res = await API.post("/users/" + email, { searchingUserID });
  return res.data;
};

// TODO: Error handling
export const createUser = async (user: UserObject) => {
  try {
    await API.post("/users", user);
  } catch (err) {
    console.log(err);
  }
};
