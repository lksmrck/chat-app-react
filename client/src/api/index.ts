import axios from "axios";
import { MessageObject, UserObject } from "../types/types";

const API = axios.create({baseURL:  "http://localhost:8000" })

export const getConversations = async (userId: string) => {
    
    
    try {
    const res = await API.get("/" + userId)    
    } catch (err) {
        console.log(err)
    }
}
export const getMessages = async () => {}
export const createConversation = async () => {}

export const sendMessage = async (message: MessageObject) => {

    try {
        const res = await API.post("/message", message)
       
    } catch (err) {
        console.log(err)
    }
}

export const getUser = async (userId: string) => {
   try {
    const res = await API.get("/users?userId=" + userId)  //   /users/:id
   } catch (err) {
    console.log(err)
   }
}

export const createUser = async (user: UserObject) => {
    try {
        const res = await API.post("/users", user) //   /users route je OK
    } catch (err ) {
        console.log(err)
    }
}