import axios from "axios";
import { MessageObject, UserObject } from "../types/types";

const API = axios.create({baseURL:  "http://localhost:8000" })



export const getConversations = async (userId: string, callback: any) => {
    
    
    try {
    const res = await API.get("/conversations/" + userId)   
     return callback(res.data) //???
    } catch (err) {
        console.log(err)
    }
}
export const getMessages = async () => {}

//DONE
export const createConversation = async (/* usersId: {searchingUserId: string, foundUserId: string} */ usersObject: any) => {

    try {
        const res = await API.post("/conversations", /* usersId */usersObject )
        console.log(res.data)
       
    } catch (err) {
        console.log(err)
    }
}



export const sendMessage = async (message: MessageObject) => {

    try {
        const res = await API.post("/message", message)
       
    } catch (err) {
        console.log(err)
    }
}

//Přidání nové konverzace po kliknutí na + button v navbaru
//DONE
export const findUser = async(email: string) => {

    try {
        const res = await API.get("/users/" + email) 
        return res.data
        /* console.log(res.data) */
       } catch (err) {
        console.log(err)
       }
}

//TBD
export const getUser = async (userId: string) => {
   try {
    const res = await API.get("/users/" + userId)  //   /users/:id
   } catch (err) {
    console.log(err)
   }
}
//DONE
export const createUser = async (user: UserObject) => {
    try {
        const res = await API.post("/users", user) 
        console.log(res)
    } catch (err ) {
        console.log(err)
    }
}