import axios from "axios";
import { MessageObject, UserObject } from "../types/types";
import { ConversationObject } from "../types/types";

const API = axios.create({ baseURL: "http://localhost:8000" });

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
export const createConversation = async (usersObject: any) => {
  try {
    const res = await API.post("/conversations", usersObject);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

//Přidání nové konverzace po kliknutí na + button v navbaru
//DONE
export const findUser = async (email: string) => {
  const res = await API.get("/users/" + email);
  return res.data;
};

//TBD
// export const getUser = async (userId: string) => {
//   try {
//     /*     const res =  */ await API.get("/users/" + userId);
//   } catch (err) {
//     console.log(err);
//   }
// };

//DONE
export const createUser = async (user: UserObject) => {
  try {
    console.log(user);
    /*   const res = */ await API.post("/users", user);
  } catch (err) {
    console.log(err);
  }
};
