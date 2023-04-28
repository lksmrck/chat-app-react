import axios from "axios";
import { MessageObject, UserObject } from "../types/types";

const API = axios.create({ baseURL: /* "http://localhost:8000" */ process.env.REACT_APP_API });

export const getConversations = async (userId: string) => {
  const res = await API.get("/conversations/" + userId);
  return res.data;
};
//DONE, TODO: upravit callback type
export const getMessages = async (conversationID: string) => {
  const res = await API.get("/messages/" + conversationID); //
  return res.data;
};

//DONE
export const findUser = async (email: string, searchingUserID: string) => {
  const res = await API.post("/users/" + email, { searchingUserID });
  return res.data;
};

//DONE
export const createUser = async (user: UserObject) => {
  try {
    console.log(user);
    /*   const res = */ await API.post("/users", user);
  } catch (err) {
    console.log(err);
  }
};
