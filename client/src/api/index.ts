import axios from "axios";
import { MessageObject, UserObject } from "../types/types";
import { ConversationObject } from "../types/types";

const API = axios.create({ baseURL: "http://localhost:8000" });

//DONE, TODO: upravit callback type
export const getConversations = async (
  userId: string,
  callback: any /* (conversations: ConversationObject[]) => () => void */
) => {
  try {
    const res = await API.get("/conversations/" + userId);
    return callback(res.data); //???
  } catch (err) {
    console.log(err);
  }
};
//DONE, TODO: upravit callback type
export const getMessages = async (conversationID: string, callback: any) => {
  try {
    const res = await API.get("/messages/" + conversationID); //
    return callback(res.data);
  } catch (err) {
    console.log(err);
  }
};

//DONE
export const createConversation = async (
  /* usersId: {searchingUserId: string, foundUserId: string} */ usersObject: any
) => {
  try {
    const res = await API.post("/conversations", /* usersId */ usersObject);
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};

//Přidání nové konverzace po kliknutí na + button v navbaru
//DONE
export const findUser = async (email: string) => {
  try {
    const res = await API.get("/users/" + email);
    return res.data;
    /* console.log(res.data) */
  } catch (err) {
    console.log(err);
  }
};

//TBD
export const getUser = async (userId: string) => {
  try {
    const res = await API.get("/users/" + userId); //   /users/:id
  } catch (err) {
    console.log(err);
  }
};
//DONE
export const createUser = async (user: UserObject) => {
  try {
    const res = await API.post("/users", user);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
